import { View, Animated } from "react-native";
import styles from "./styles";
import { useRef } from "react";

function Circle({ firstDelay, secondDelay }) {
  const opacityAnim = useRef(new Animated.Value(0.2)).current;
  Animated.loop(
    Animated.sequence([
      Animated.delay(firstDelay),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.2,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.delay(secondDelay),
    ])
  ).start();

  const backgroundColor = opacityAnim.interpolate({
    inputRange: [0.2, 1],
    outputRange: ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)"],
  });

  return (
    <Animated.View
      style={[
        styles.circle,
        {
          backgroundColor,
        },
      ]}
    ></Animated.View>
  );
}

export default Circle;
