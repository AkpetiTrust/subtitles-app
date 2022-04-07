import { View } from "react-native";
import globalStyles from "../../globalStyles/globalStyles";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import Nav from "../../components/Nav/Nav";
import useSearch from "../../utils/hooks/useSearch";
import SearchItems from "../../components/SearchItems/SearchItems";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import useStorage from "../../utils/hooks/useStorage";

function Home({ navigation, route }) {
  const [searchData, setSearchTerm, searchTerm] = useSearch();
  const isFocused = useIsFocused();
  const [, addItem, , refreshItems] = useStorage();

  useEffect(() => {
    let term = route?.params?.term;
    if (term) {
      setSearchTerm(term);
      addItem(term);
    }

    // To reset route
    navigation.setParams({ term: "" });

    // Refresh items
    refreshItems();
  }, [isFocused]);

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Logo style={styles.logo} />
      <View style={styles.main}>
        <AppText style={styles.title}>
          What movie do you need subtitles for?
        </AppText>
        <SearchBar
          defaultValue={searchTerm}
          onEndEditing={(e) => {
            let text = e.nativeEvent.text;
            setSearchTerm(text);
            addItem(text);
          }}
        />
        <SearchItems searchData={searchData} />
      </View>
      <Nav navigation={navigation} />
    </View>
  );
}

export default Home;
