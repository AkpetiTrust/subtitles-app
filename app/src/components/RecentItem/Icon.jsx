import * as React from "react";
import Svg, { Path } from "react-native-svg";

const Icon = (props) => (
  <Svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m6.174 5 3.58-3.573A.836.836 0 0 0 8.572.245L5 3.825 1.428.245A.836.836 0 1 0 .246 1.427L3.826 5 .246 8.571a.833.833 0 0 0 0 1.183.832.832 0 0 0 1.182 0L5 6.174l3.572 3.58a.832.832 0 0 0 1.182 0 .832.832 0 0 0 0-1.183L6.174 5Z"
      fill="#0FAAC3"
    />
  </Svg>
);

export default Icon;
