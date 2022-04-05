import { Text } from "react-native";

function AppText(props) {
  return (
    <Text
      {...props}
      style={{
        fontFamily: props.fontWeight || "regular",
        includeFontPadding: false,
        ...props.style,
      }}
    >
      {props.children}
    </Text>
  );
}

export default AppText;
