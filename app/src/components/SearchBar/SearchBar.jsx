import { TextInput, View } from "react-native";
import styles from "./styles";
import Icon from "./Icon";

function SearchBar(props) {
  return (
    <View {...props} style={styles.container}>
      <TextInput style={styles.input}></TextInput>
      <Icon style={styles.icon} />
    </View>
  );
}

export default SearchBar;
