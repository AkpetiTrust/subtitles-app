import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.167 12.667v.791a2.375 2.375 0 0 0 2.375 2.375h7.916a2.375 2.375 0 0 0 2.375-2.375v-.791M12.667 9.5 9.5 12.667m0 0L6.333 9.5M9.5 12.667v-9.5"
      stroke="#0FAAC3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Icon;
