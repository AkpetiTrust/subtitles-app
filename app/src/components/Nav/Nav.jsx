import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Svg, { Path } from "react-native-svg";
import { useRoute } from "@react-navigation/native";

function Nav({ navigation }) {
  const { name } = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.iconOne}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 0 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          {name === "Home" || name === "Download" ? (
            <Svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L2.29289 9.29289C1.90237 9.68342 1.90237 10.3166 2.29289 10.7071C2.68342 11.0976 3.31658 11.0976 3.70711 10.7071L4 10.4142V17C4 17.5523 4.44772 18 5 18H7C7.55228 18 8 17.5523 8 17V15C8 14.4477 8.44772 14 9 14H11C11.5523 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H15C15.5523 18 16 17.5523 16 17V10.4142L16.2929 10.7071C16.6834 11.0976 17.3166 11.0976 17.7071 10.7071C18.0976 10.3166 18.0976 9.68342 17.7071 9.29289L10.7071 2.29289Z"
                fill="white"
              />
            </Svg>
          ) : (
            <Svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M2.5 10L4.16667 8.33333M4.16667 8.33333L10 2.5L15.8333 8.33333M4.16667 8.33333V16.6667C4.16667 17.1269 4.53976 17.5 5 17.5H7.5M15.8333 8.33333L17.5 10M15.8333 8.33333V16.6667C15.8333 17.1269 15.4602 17.5 15 17.5H12.5M7.5 17.5C7.96024 17.5 8.33333 17.1269 8.33333 16.6667V13.3333C8.33333 12.8731 8.70643 12.5 9.16667 12.5H10.8333C11.2936 12.5 11.6667 12.8731 11.6667 13.3333V16.6667C11.6667 17.1269 12.0398 17.5 12.5 17.5M7.5 17.5H12.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          hitSlop={{ top: 20, bottom: 20, left: 0, right: 20 }}
        >
          {name === "Home" || name === "Download" ? (
            <Svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M10 6.66667V10L12.5 12.5M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ) : (
            <Svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L12.1213 13.5355C12.5118 13.9261 13.145 13.9261 13.5355 13.5355C13.9261 13.145 13.9261 12.5118 13.5355 12.1213L11 9.58579V6Z"
                fill="white"
              />
            </Svg>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Nav;
