import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { ReactElement } from "react";
import "react-native-gesture-handler";
import { HomeNavigator } from "./home.navigator";

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export const AppNavigator = (): ReactElement => (
  <NavigationContainer theme={navigatorTheme}>
    <HomeNavigator />
  </NavigationContainer>
);
