// @flow

import ledger from 'ledger-test-library'
import bitcoin from 'bitcoinjs-lib'

export const networks = [
  {
    ...bitcoin.networks.bitcoin,
    family: 1,
  },
  {
    ...bitcoin.networks.testnet,
    family: 1,
  },
]

export function computeTransaction(addresses: Array<*>) {
  return (transaction: Object) => {
    const outputVal = transaction.outputs
      .filter(o => addresses.includes(o.address))
      .reduce((acc, cur) => acc + cur.value, 0)
    const inputVal = transaction.inputs
      .filter(i => addresses.includes(i.address))
      .reduce((acc, cur) => acc + cur.value, 0)
    const balance = outputVal - inputVal
    return {
      ...transaction,
      balance,
    }
  }
}

export function getTransactions(addresses: Array<string>) {
  return ledger.getTransactions(addresses, true)
}

export async function getAccount({
  allAddresses = [],
  currentIndex = 0,
  path,
  hdnode,
  segwit,
  network,
  asyncDelay = 500,
}: {
  allAddresses?: Array<string>,
  currentIndex?: number,
  path: string,
  hdnode: Object,
  segwit: boolean,
  network: Object,
  asyncDelay?: number,
}) {
  const gapLimit = 20
  const script = segwit ? parseInt(network.scriptHash, 10) : parseInt(network.pubKeyHash, 10)

  let transactions = []
  let lastAddress = null

  const pubKeyToSegwitAddress = (pubKey, scriptVersion) => {
    const script = [0x00, 0x14].concat(Array.from(bitcoin.crypto.hash160(pubKey)))
    const hash160 = bitcoin.crypto.hash160(new Uint8Array(script))
    return bitcoin.address.toBase58Check(hash160, scriptVersion)
  }

  const getPublicAddress = ({ hdnode, path, script, segwit }) => {
    hdnode = hdnode.derivePath(path)
    if (!segwit) {
      return hdnode.getAddress().toString()
    }
    return pubKeyToSegwitAddress(hdnode.getPublicKeyBuffer(), script)
  }

  const getPath = (type, index) => `${type === 'external' ? 0 : 1}/${index}`

  const getAddress = ({ type, index }) => ({
    type,
    index,
    address: getPublicAddress({ hdnode, path: getPath(type, index), script, segwit }),
  })

  const getAsyncAddress = params =>
    new Promise(resolve => setTimeout(() => resolve(getAddress(params)), asyncDelay))

  const getLastAddress = (addresses, txs) => {
    const txsAddresses = [...txs.inputs.map(tx => tx.address), ...txs.outputs.map(tx => tx.address)]
    const lastAddress = addresses.reverse().find(a => txsAddresses.includes(a.address)) || {
      index: 0,
    }
    return {
      ...lastAddress,
      address: getAddress({ type: 'external', index: lastAddress.index + 1 }).address,
    }
  }

  const nextPath = (index = 0) =>
    Array.from(new Array(gapLimit).keys())
      .reduce(
        (promise, v) =>
          promise.then(async results => {
            const result = await Promise.all([
              getAsyncAddress({ type: 'external', index: v + index }),
              getAsyncAddress({ type: 'internal', index: v + index }),
            ])
            return [...results, result]
          }),
        Promise.resolve([]),
      )
      .then(async results => {
        const addresses = results.reduce((result, v) => [...result, ...v], [])
        const listAddresses = addresses.map(a => a.address)

        allAddresses = [...new Set([...allAddresses, ...listAddresses])]

        const txs = await getTransactions(listAddresses)

        const hasTransactions = txs.length > 0

        transactions = [...transactions, ...txs.map(computeTransaction(allAddresses))]
        lastAddress = hasTransactions ? getLastAddress(addresses, txs[0]) : lastAddress

        if (hasTransactions) {
          return nextPath(index + (gapLimit - 1))
        }

        const balance = transactions.reduce((result, v) => {
          result += v.balance
          return result
        }, 0)

        const currentAddress =
          lastAddress !== null ? lastAddress : getAddress({ type: 'external', index: 0 })

        return {
          address: currentAddress.address,
          allAddresses,
          balance,
          currentIndex: currentAddress.index,
          path: `${path}/${getPath('external', currentAddress.index + 1)}`,
          transactions,
        }
      })

  if (allAddresses.length === 0 && currentIndex > 0) {
    for (let i = currentIndex; i--; ) {
      allAddresses = [
        ...allAddresses,
        getAddress({ type: 'internal', index: i }).address,
        getAddress({ type: 'external', index: i }).address,
      ]
    }
  }

  return nextPath(currentIndex)
}

export function getHDNode({ xpub58, network }: { xpub58: string, network: Object }) {
  return bitcoin.HDNode.fromBase58(xpub58, network)
}
