import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight + 20,
    paddingBottom: 90,
  },
  logo: {
    marginLeft: 20,
    marginBottom: 40,
  },
  main: {
    paddingHorizontal: 40,
    flex: 1,
  },
  title: {
    marginBottom: 20,
  },
});

export default styles;
