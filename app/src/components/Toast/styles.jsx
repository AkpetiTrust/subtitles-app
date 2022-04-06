import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    top: StatusBar.currentHeight + 30,
    backgroundColor: "#FCF6F8",
    width: 300,
    padding: 10,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});

export default styles;
