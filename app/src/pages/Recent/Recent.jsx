import { View, ScrollView } from "react-native";
import globalStyles from "../../globalStyles/globalStyles";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import RecentItem from "../../components/RecentItem/RecentItem";
function Recent({ navigation }) {
  let items = ["The Adam Project", "Red Notice", "Death on the Nile"];

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Logo style={styles.logo} />
      <View style={styles.main}>
        <AppText style={styles.title} fontWeight="bold">
          Recent searches:
        </AppText>
        <ScrollView>
          {items.map((item) => (
            <RecentItem item={item} key={item} />
          ))}
        </ScrollView>
      </View>
      <Nav navigation={navigation} />
    </View>
  );
}

export default Recent;
