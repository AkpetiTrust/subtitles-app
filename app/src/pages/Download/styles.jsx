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
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    marginVertical: 20,
  },
  illustration: {
    marginBottom: 60,
    marginTop: 20,
  },
  path: {
    marginTop: 7,
    marginBottom: 20,
  },
});

export default styles;
