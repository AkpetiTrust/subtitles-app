import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/src/pages/Home/Home";
import { useState } from "react";
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    bold: require("./app/assets/fonts/Montserrat-Bold.ttf"),
    extraBold: require("./app/assets/fonts/Montserrat-ExtraBold.ttf"),
    medium: require("./app/assets/fonts/Montserrat-Medium.ttf"),
    regular: require("./app/assets/fonts/Montserrat-Regular.ttf"),
    semiBold: require("./app/assets/fonts/Montserrat-SemiBold.ttf"),
  });
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return fontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => {
        setFontsLoaded(true);
      }}
      onError={() => {
        setFontsLoaded(true);
      }}
    />
  );
}
