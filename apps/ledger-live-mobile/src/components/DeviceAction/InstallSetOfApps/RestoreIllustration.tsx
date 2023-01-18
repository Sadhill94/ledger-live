import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Path,
  Rect,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";

const RestoreIllustration = (props: SvgProps) => (
  <Svg width={185} height={126} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M179.853 38.459v14.235a1.22 1.22 0 0 1-.778 1.11 1.21 1.21 0 0 1-.468.08V37.271a1.256 1.256 0 0 1 1.147.73c.064.144.097.3.099.458Z"
        fill="url(#b)"
      />
      <Path
        d="M173.299 117.234h-55.284L118 19.652h55.299a5.31 5.31 0 0 1 3.764 1.553 5.312 5.312 0 0 1 1.56 3.761v86.947a5.314 5.314 0 0 1-5.324 5.321Z"
        fill="url(#c)"
      />
      <Path
        d="M118.01 114.742v-92.6h55.629a2.827 2.827 0 0 1 2.824 2.822v86.95a2.823 2.823 0 0 1-2.824 2.826l-55.629.002Z"
        fill="url(#d)"
      />
    </G>
    <Rect
      x={2.58}
      y={50.606}
      width={74.577}
      height={21.606}
      rx={2.091}
      fill="#3D3D3D"
    />
    <G>
      <Path
        d="M15.656 94.078a1.729 1.729 0 0 1 .15-2.44l43.726-38.635c4.471-3.95 11.299-3.529 15.25.943 3.95 4.47 3.528 11.298-.944 15.248L30.113 107.83a1.729 1.729 0 0 1-2.44-.151l-12.017-13.6Z"
        fill="silver"
      />
    </G>
    <Circle
      cx={66.354}
      cy={61.408}
      r={6.273}
      fill="silver"
      stroke="url(#f)"
      strokeWidth={0.697}
    />
    <Path
      d="M143.096 62.408a.5.5 0 0 1-.706 0l-3.176-3.176a.499.499 0 1 1 .706-.706l2.823 2.824 2.823-2.824a.5.5 0 0 1 .706.706l-3.176 3.176Zm-.852-.353c0-.936-.026-1.867-.077-2.79l.997-.056c.052.942.078 1.891.078 2.846h-.998Zm-.696-8.337a49.481 49.481 0 0 0-1.236-5.44l.959-.275c.521 1.81.943 3.662 1.262 5.55l-.985.165Zm-3.079-10.704a49.184 49.184 0 0 0-2.424-5.024l.874-.484a50.509 50.509 0 0 1 2.472 5.126l-.922.382Zm-5.396-9.745a50.086 50.086 0 0 0-3.481-4.36l.744-.666a50.918 50.918 0 0 1 3.55 4.447l-.813.579Zm-7.426-8.305a49.994 49.994 0 0 0-4.36-3.481l.578-.814a50.956 50.956 0 0 1 4.447 3.55l-.665.745Zm-9.081-6.454a49.57 49.57 0 0 0-5.025-2.424l.383-.922c1.76.73 3.471 1.557 5.125 2.473l-.483.873Zm-10.289-4.266a49.465 49.465 0 0 0-5.44-1.237l.166-.984c1.887.318 3.739.74 5.55 1.262l-.276.959Zm-10.986-1.855a50.539 50.539 0 0 0-2.791-.077v-.999c.955 0 1.904.027 2.846.079l-.055.997Zm-2.791-.077c-.937 0-1.867.026-2.791.077l-.055-.997a51.545 51.545 0 0 1 2.846-.079v.999Zm-8.337.695c-1.85.312-3.665.726-5.44 1.237l-.276-.96c1.81-.52 3.663-.943 5.55-1.261l.166.984Zm-10.704 3.079a49.52 49.52 0 0 0-5.025 2.424l-.483-.873a50.537 50.537 0 0 1 5.126-2.473l.382.922Zm-9.746 5.397a49.99 49.99 0 0 0-4.36 3.48l-.665-.743a50.999 50.999 0 0 1 4.447-3.551l.578.814Zm-8.305 7.426a49.955 49.955 0 0 0-3.48 4.36l-.814-.579a50.962 50.962 0 0 1 3.55-4.447l.744.666Zm-6.453 9.08a49.522 49.522 0 0 0-2.424 5.025l-.922-.382a50.514 50.514 0 0 1 2.472-5.126l.874.484Zm-4.267 10.29a49.46 49.46 0 0 0-1.236 5.44l-.984-.167a50.419 50.419 0 0 1 1.261-5.55l.96.277Zm-1.855 10.985a50.532 50.532 0 0 0-.077 2.791h-.998c0-.955.026-1.904.078-2.846l.997.055Zm100.616 3.497a.998.998 0 0 1-1.412 0l-6.352-6.352a.998.998 0 1 1 1.411-1.412l5.647 5.647 5.647-5.647a.997.997 0 1 1 1.411 1.412l-6.352 6.352Zm-1.704-.706c0-.927-.026-1.849-.076-2.763l1.993-.11c.052.95.079 1.91.079 2.873h-1.996Zm-.689-8.254a48.973 48.973 0 0 0-1.224-5.384l1.918-.552a50.994 50.994 0 0 1 1.275 5.604l-1.969.332Zm-3.048-10.596a48.942 48.942 0 0 0-2.399-4.974l1.746-.967a51.184 51.184 0 0 1 2.498 5.177l-1.845.764Zm-5.342-9.647a49.686 49.686 0 0 0-3.446-4.317l1.488-1.33a51.537 51.537 0 0 1 3.585 4.49l-1.627 1.157Zm-7.352-8.222a49.59 49.59 0 0 0-4.316-3.447l1.156-1.627a51.361 51.361 0 0 1 4.491 3.586l-1.331 1.488Zm-8.99-6.39a48.97 48.97 0 0 0-4.974-2.399l.765-1.844a50.99 50.99 0 0 1 5.176 2.497l-.967 1.747Zm-10.185-4.222a48.954 48.954 0 0 0-5.385-1.225l.332-1.968c1.906.321 3.776.748 5.605 1.274l-.552 1.919Zm-10.875-1.837a50.03 50.03 0 0 0-2.764-.076v-1.997c.964 0 1.922.027 2.874.08l-.11 1.993ZM92.5 12.81c-.927 0-1.849.025-2.763.076l-.11-1.993c.95-.053 1.909-.08 2.873-.08v1.997Zm-8.254.688a48.907 48.907 0 0 0-5.385 1.225l-.552-1.92a50.95 50.95 0 0 1 5.605-1.273l.332 1.968ZM73.65 16.547a49.04 49.04 0 0 0-4.974 2.4L67.71 17.2a51.018 51.018 0 0 1 5.176-2.497l.765 1.844Zm-9.648 5.342a49.488 49.488 0 0 0-4.316 3.447l-1.33-1.488a51.486 51.486 0 0 1 4.49-3.586l1.156 1.627Zm-8.222 7.352a49.482 49.482 0 0 0-3.446 4.317L50.707 32.4a51.486 51.486 0 0 1 3.585-4.49l1.488 1.33Zm-6.389 8.99a49.03 49.03 0 0 0-2.4 4.974l-1.843-.764a51.029 51.029 0 0 1 2.497-5.177l1.746.967Zm-4.223 10.186a48.928 48.928 0 0 0-1.224 5.384l-1.969-.332a50.918 50.918 0 0 1 1.275-5.604l1.918.552Zm-1.837 10.875c-.05.914-.076 1.836-.076 2.763H41.26c0-.964.027-1.922.08-2.873l1.992.11Z"
      fill="#BBB0FF"
    />
    <Circle cx={92.5} cy={13.642} r={10.315} fill="#8B80DB" />
    <Path
      d="m94.725 13.736 1.928-1.938-1.928-1.927-.521.532.468.468c.17.17.362.352.554.522h-6.453v.81h6.474c-.202.18-.394.35-.575.532l-.468.479.521.522Zm-6.377 1.66 1.927 1.928.521-.533-.468-.468c-.17-.17-.362-.351-.554-.522h6.453v-.809h-6.474c.202-.181.394-.351.575-.532l.468-.48-.521-.521-1.928 1.938Z"
      fill="#000"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={179.232}
        y1={37.084}
        x2={179.232}
        y2={53.758}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8C8D8D" />
        <Stop offset={0.27} stopColor="#7F7F80" />
        <Stop offset={0.62} stopColor="#747475" />
        <Stop offset={1} stopColor="#707071" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={118}
        y1={68.442}
        x2={178.613}
        y2={68.442}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#626060" />
        <Stop offset={0.18} stopColor="#888887" />
        <Stop offset={0.4} stopColor="#5E5D5E" />
        <Stop offset={0.59} stopColor="#616161" />
        <Stop offset={0.76} stopColor="#6C6B6C" />
        <Stop offset={0.86} stopColor="#767676" />
        <Stop offset={0.99} stopColor="#8D8D8D" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={175.805}
        y1={68.442}
        x2={118.719}
        y2={68.442}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.92} stopColor="#19191A" />
        <Stop offset={1} stopColor="#353536" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={71.233}
        y1={57.227}
        x2={61.127}
        y2={65.242}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9E9E9E" />
        <Stop offset={1} stopColor="#B4B4B4" />
      </LinearGradient>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(118 19.65)"
          d="M0 0h61.85v97.584H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RestoreIllustration;