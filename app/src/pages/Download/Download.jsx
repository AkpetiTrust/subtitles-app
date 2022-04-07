import { View } from "react-native";
import globalStyles from "../../globalStyles/globalStyles";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Downloading from "./Illustrations/Downloading";
import Downloaded from "./Illustrations/Downloaded";

function Download({
  navigation,
  route: {
    params: { id, fps, release },
  },
}) {
  const [loading, setLoading] = useState(true);
  const [downloadLocation, setDownloadLocation] = useState("");

  const apiKey = "yGdLhGNF0uSsCtyBLW2X3uHDKvA33hHs";

  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      let assetUri = asset.uri;
      assetUri = assetUri.slice(
        "file:///".length,
        assetUri.length - release.length - 4
      );

      // To make sure the last character is a forward slash
      let formattedProperly = false;
      while (!formattedProperly) {
        let lastIndex = assetUri.length - 1;
        if (assetUri[lastIndex] === "/") {
          formattedProperly = true;
          break;
        }
        assetUri = assetUri.slice(0, lastIndex);
      }

      setDownloadLocation(assetUri);
      setLoading(false);
    }
  };

  const downloadFile = (link, fileUri) => {
    FileSystem.downloadAsync(link, fileUri)
      .then(({ uri }) => {
        saveFile(uri);
      })
      .catch(() => {
        navigation.goBack();
      });
  };

  const body = JSON.stringify({
    file_id: id,
    sub_format: "srt",
    file_name: release,
    in_fps: fps,
    out_fps: fps,
    timeshift: 0,
    force_download: true,
  });

  useEffect(() => {
    fetch("https://api.opensubtitles.com/api/v1/download", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Api-Key": apiKey,
      },
      body,
    })
      .then((response) => response.json())
      .then((result) => {
        const link = result.link;
        let fileUri = FileSystem.documentDirectory + `${release}.srt`;
        downloadFile(link, fileUri);
      })
      .catch(() => {
        navigation.goBack();
      });
  }, []);

  const main = loading ? (
    <View style={styles.main}>
      <AppText style={styles.title} fontWeight="bold">
        DOWNLOADING FILE
      </AppText>
      <Downloading style={styles.illustration} />
      <Loading />
    </View>
  ) : (
    <View style={styles.main}>
      <AppText style={styles.title} fontWeight="bold">
        FILE DOWNLOADED SUCCESSFULLY!
      </AppText>
      <Downloaded style={styles.illustration} />
      <View>
        <AppText>You can locate your file in this folder:</AppText>
        <AppText style={styles.path} fontWeight="bold">
          {downloadLocation}
        </AppText>
        <AppText>This is the DCIM folder in your internal storage.</AppText>
      </View>
    </View>
  );

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Logo style={styles.logo} />
      {main}
      <Nav navigation={navigation} />
    </View>
  );
}

export default Download;
