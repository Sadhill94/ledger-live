import { Account } from "@ledgerhq/types-live";
import { ScreenName } from "../../../const";

export type MarketNavigatorStackParamList = {
  [ScreenName.MarketList]: { top100?: boolean };
  [ScreenName.MarketDetail]: {
    currencyId: string;
    resetSearchOnUmount?: boolean;
    drawer?: {
      name: string;
      props?: {
        singleProviderRedirectMode: boolean;
        account?: Account;
      };
    };
  };
};
