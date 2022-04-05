import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.2 3.6a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2ZM1.8 7.2a5.4 5.4 0 1 1 9.801 3.128l4.335 4.336a.9.9 0 0 1-1.272 1.272l-4.335-4.334A5.4 5.4 0 0 1 1.8 7.2Z"
      fill="#fff"
      fillOpacity={0.6}
    />
  </Svg>
);

export default Icon;
