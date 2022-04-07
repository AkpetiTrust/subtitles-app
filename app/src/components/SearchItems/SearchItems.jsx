import { ScrollView, View, FlatList } from "react-native";
import SearchCard from "../SearchCard/SearchCard";
import ScalableImage from "./ScalableImage";
import Loading from "../Loading/Loading";
import { useState } from "react";
import AppText from "../AppText/AppText";
import styles from "./styles";

function SearchItems({ searchData }) {
  const [imageWidth, setImageWidth] = useState(150);

  const renderItem = ({ item: { release, language, movie_name, id, fps } }) => {
    return (
      <SearchCard
        key={id}
        searchItem={{
          release,
          language,
          movie_name,
          id,
          fps,
        }}
      />
    );
  };

  if (searchData === null) {
    return <ScrollView></ScrollView>;
  } else if (searchData === false) {
    return <Loading />;
  } else if (searchData === undefined) {
    return (
      <View style={styles.errorView}>
        <AppText fontWeight={"bold"} style={styles.errorText}>
          No results 😔
        </AppText>
      </View>
    );
  } else if (searchData === "error") {
    return (
      <View style={styles.errorView}>
        <AppText fontWeight={"bold"} style={styles.errorText}>
          Please connect to the internet.
        </AppText>
      </View>
    );
  } else {
    return (
      <FlatList
        data={searchData.items}
        renderItem={renderItem}
        ListHeaderComponent={
          <ScalableImage
            uri={searchData.image}
            width={imageWidth}
            key={searchData.image}
          />
        }
        onContentSizeChange={(width, height) => {
          setImageWidth(width);
        }}
        keyExtractor={(searchItem) => searchItem.id}
      />
    );
  }
}

export default SearchItems;
