import { Image } from "react-native";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

function ScalableImage({ uri, width }) {
  const [height, setHeight] = useState(300);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    Image.getSize(uri, (actualWidth, actualHeight) => {
      setHeight(Math.round((actualHeight * width) / actualWidth));
    });
  }, [width]);

  return (
    <>
      {!error && (
        <Image
          source={{ uri }}
          onLoadEnd={() => {
            setLoaded(true);
          }}
          onError={() => {
            setError(true);
            setLoaded(true);
          }}
          style={{
            width,
            height,
            marginBottom: 40,
            display: loaded ? null : "none",
          }}
        />
      )}
      {!loaded && (
        <Loading
          style={{
            marginBottom: 30,
          }}
        />
      )}
    </>
  );
}

export default ScalableImage;
