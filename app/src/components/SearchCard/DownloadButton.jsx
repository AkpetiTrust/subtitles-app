import { TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

function DownloadButton({ id, fps, release }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Download", { id, fps, release });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{ ...styles.column, ...styles.columnTwo }}
      onPress={handlePress}
    >
      <Icon />
    </TouchableOpacity>
  );
}

export default DownloadButton;
