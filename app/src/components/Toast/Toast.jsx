import { Animated, useWindowDimensions } from "react-native";
import styles from "./styles";
import AppText from "../AppText/AppText";
import { useRef } from "react";

function Toast({ message }) {
  const { width } = useWindowDimensions();
  const translateAnim = useRef(new Animated.Value(-200)).current;
  Animated.sequence([
    Animated.timing(translateAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.delay(3000),
    Animated.timing(translateAnim, {
      toValue: -200,
      duration: 500,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <Animated.View
      style={[
        { ...styles.toast, left: width / 2 - 150 },
        { transform: [{ translateY: translateAnim }] },
      ]}
    >
      <AppText fontWeight={"medium"} style={styles.text}>
        {message}
      </AppText>
    </Animated.View>
  );
}

export default Toast;
