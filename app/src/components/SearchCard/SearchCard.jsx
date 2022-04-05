import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import AppText from "../AppText/AppText";
import Icon from "./Icon";

function SearchCard({ searchItem: { release, movie_name, language } }) {
  return (
    <View style={styles.card}>
      <View style={[styles.row, styles.rowOne]}>
        <AppText style={{ ...styles.column, ...styles.columnOne }}>
          {release}
        </AppText>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ ...styles.column, ...styles.columnTwo }}
        >
          <Icon />
        </TouchableOpacity>
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
