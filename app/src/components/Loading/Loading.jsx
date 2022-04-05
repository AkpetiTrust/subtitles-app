import { View } from "react-native";
import styles from "./styles";
import Circle from "./Circle";

function Loading({ style }) {
  return (
    <View style={[styles.container, style]}>
      {[...Array(3)].map((item, index, array) => (
        <Circle
          firstDelay={index * 500}
          secondDelay={(array.length - (index + 1)) * 500}
          key={index}
        />
      ))}
    </View>
  );
}

export default Loading;
