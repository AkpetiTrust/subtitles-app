import { View } from "react-native";
import globalStyles from "../../globalStyles/globalStyles";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchCard from "../../components/SearchCard/SearchCard";
import Nav from "../../components/Nav/Nav";

function Home({ navigation }) {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Logo style={styles.logo} />
      <View style={styles.main}>
        <AppText style={styles.title}>
          What movie do you need subtitles for?
        </AppText>
        <SearchBar />
        <SearchCard
          searchItem={{
            release: "1080p.NF.WEBRip.DDP5.1.Atmos.x264-TEPES",
            language: "English",
            movie_name: "2022 - The Adam Project",
          }}
        />
      </View>
      <Nav navigation={navigation} />
    </View>
  );
}

export default Home;
