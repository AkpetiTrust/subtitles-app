import { TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles from "./styles";
import { useState } from "react";

function DownloadButton({ id, toastFunctions, fps }) {
  const [setToastMessage, setToastShown, setToastId] = toastFunctions;
  const [pressed, setPressed] = useState(false);
  const apiKey = "yGdLhGNF0uSsCtyBLW2X3uHDKvA33hHs";
  const handlePress = () => {
    if (pressed) return;
    setPressed(true);
    setToastShown(true);
    setToastId(id);
    setToastMessage("Downloading...");

    const body = JSON.stringify({
      file_id: id,
      sub_format: "string",
      file_name: "string",
      in_fps: fps,
      out_fps: fps,
      timeshift: 0,
      force_download: true,
    });

    console.log(body);

    fetch("https://api.opensubtitles.com/api/v1/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": apiKey,
      },
      body,
    })
      .then((response) => console.log(response))
      //   .then((result) => {
      //     const link = result.link;
      //     console.log(link);
      //   })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{ ...styles.column, ...styles.columnTwo }}
      onPress={handlePress}
    >
      <Icon />
    </TouchableOpacity>
  );
}

export default DownloadButton;
