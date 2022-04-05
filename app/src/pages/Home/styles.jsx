import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 20,
  },
  logo: {
    marginLeft: 20,
    marginBottom: 40,
  },
  main: {
    paddingHorizontal: 40,
  },
  title: {
    marginBottom: 20,
  },
});

export default styles;
