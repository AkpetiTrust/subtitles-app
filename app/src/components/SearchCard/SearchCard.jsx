import { View } from "react-native";
import styles from "./styles";
import AppText from "../AppText/AppText";
import DownloadButton from "./DownloadButton";

function SearchCard({
  searchItem: { release, movie_name, language, id, fps },
}) {
  return (
    <View style={styles.card}>
      <View style={[styles.row, styles.rowOne]}>
        <AppText style={{ ...styles.column, ...styles.columnOne }}>
          {release}
        </AppText>
        <DownloadButton id={id} fps={fps} release={release} />
      </View>
      <View style={styles.row}>
        <AppText
          style={{ ...styles.column, ...styles.columnOne }}
          fontWeight={"bold"}
        >
          {movie_name}
        </AppText>
        <AppText style={{ ...styles.column, ...styles.columnTwo }}>
          Language: {language}
        </AppText>
      </View>
    </View>
  );
}

export default SearchCard;
