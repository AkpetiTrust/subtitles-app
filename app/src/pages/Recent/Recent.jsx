import { View, ScrollView } from "react-native";
import globalStyles from "../../globalStyles/globalStyles";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import RecentItem from "../../components/RecentItem/RecentItem";
import useStorage from "../../utils/hooks/useStorage";
import Loading from "../../components/Loading/Loading";

function Recent({ navigation }) {
  const [recentItems, , deleteItem, , loading] = useStorage();

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Logo style={styles.logo} />
      <View style={styles.main}>
        <AppText style={styles.title} fontWeight="bold">
          Recent searches:
        </AppText>
        {loading ? (
          <Loading />
        ) : (
          <ScrollView>
            {recentItems.map((item) => (
              <RecentItem deleteItem={deleteItem} item={item} key={item} />
            ))}
          </ScrollView>
        )}
      </View>
      <Nav navigation={navigation} />
    </View>
  );
}

export default Recent;
