import { ScrollView, Image } from "react-native";
import SearchCard from "../SearchCard/SearchCard";
import styles from "./styles";

function SearchItems({ searchData }) {
  if (!searchData) {
    return <ScrollView></ScrollView>;
  } else {
    return (
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: searchData.image }}
          resizeMode="contain"
        />
        {searchData.items.map(({ release, language, movie_name, id }) => (
          <SearchCard
            key={id}
            searchItem={{
              release,
              language,
              movie_name,
              id,
            }}
          />
        ))}
      </ScrollView>
    );
  }
}

export default SearchItems;
