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
    flex: 1,
    paddingHorizontal: 40,
    marginTop: 15,
  },
  title: {
    marginBottom: 20,
  },
});

export default styles;
