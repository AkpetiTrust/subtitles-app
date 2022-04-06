import { View } from "react-native";
import globalStyles from "../../globalStyles/globalStyles";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Logo from "../../components/Logo/Logo";
import SearchBar from "../../components/SearchBar/SearchBar";
import Nav from "../../components/Nav/Nav";
import useSearch from "../../utils/hooks/useSearch";
import SearchItems from "../../components/SearchItems/SearchItems";
import Toast from "../../components/Toast/Toast";
import { useState, useMemo } from "react";

function Home({ navigation }) {
  const [searchData, setSearchTerm] = useSearch();

  // Toast functions
  const [toastShown, setToastShown] = useState(false);
  const [toastMessage, setToastMessage] = useState(
    "File downloaded successfully. It’s located in your downloads folder."
  );
  const [toastId, setToastId] = useState(0);

  const toastFunctions = [setToastMessage, setToastShown, setToastId];

  const memoToast = useMemo(
    () => <Toast key={toastId} message={toastMessage} />,
    [toastId]
  );

  // Id to force re-render on multiple clicks
  // Memo to prevent unnecessary rerenders

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
        <SearchItems searchData={searchData} toastFunctions={toastFunctions} />
      </View>
      <Nav navigation={navigation} />
      {toastShown && toastFunctions && memoToast}
    </View>
  );
}

export default Home;
