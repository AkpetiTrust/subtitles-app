import { TouchableOpacity, View } from "react-native";
import AppText from "../AppText/AppText";
import styles from "./styles";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";

function RecentItem({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.recentItem}>
      <TouchableOpacity
        hitSlop={{ top: 8, bottom: 8, right: 0, left: 0 }}
        activeOpacity={0.4}
      >
        <Icon style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={{ top: 5, bottom: 5, right: 300, left: 0 }}
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate("Home", { term: item });
        }}
      >
        <AppText style={styles.text}>{item}</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default RecentItem;
