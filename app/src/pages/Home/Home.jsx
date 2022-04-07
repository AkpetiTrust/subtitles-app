import { View } from "react-native";
import globalStyles from "../../globalStyles/globalStyles";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import Nav from "../../components/Nav/Nav";
import useSearch from "../../utils/hooks/useSearch";
import SearchItems from "../../components/SearchItems/SearchItems";

function Home({ navigation }) {
  const [searchData, setSearchTerm] = useSearch();

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Logo style={styles.logo} />
      <View style={styles.main}>
        <AppText style={styles.title}>
          What movie do you need subtitles for?
        </AppText>
        <SearchBar
          onEndEditing={(e) => {
            setSearchTerm(e.nativeEvent.text.toLowerCase());
          }}
        />
        <SearchItems searchData={searchData} />
      </View>
      <Nav navigation={navigation} />
    </View>
  );
}

export default Home;
