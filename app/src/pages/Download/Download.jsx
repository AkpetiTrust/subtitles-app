import { View } from "react-native";
import globalStyles from "../../globalStyles/globalStyles";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import Downloading from "./Illustrations/Downloading";
import Downloaded from "./Illustrations/Downloaded";
import * as WebBrowser from "expo-web-browser";

function Download({
  navigation,
  route: {
    params: { id, fps, release },
  },
}) {
  const [loading, setLoading] = useState(true);

  const apiKey = "yGdLhGNF0uSsCtyBLW2X3uHDKvA33hHs";

  const body = JSON.stringify({
    file_id: id,
    sub_format: "srt",
    file_name: release,
    in_fps: fps,
    out_fps: fps,
    timeshift: 0,
    force_download: 1,
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
        WebBrowser.openBrowserAsync(link).then(() => {
          setLoading(false);
        });
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
        <AppText>You can locate your file in your downloads.</AppText>
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
