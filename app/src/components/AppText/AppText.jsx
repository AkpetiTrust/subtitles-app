import { Text } from "react-native";

function AppText({ children, style, fontWeight, ...rest }) {
  return (
    <Text
      {...rest}
      style={{
        fontFamily: fontWeight || "regular",
        includeFontPadding: false,
        color: "#fff",
        ...style,
      }}
    >
      {children}
    </Text>
  );
}

export default AppText;
