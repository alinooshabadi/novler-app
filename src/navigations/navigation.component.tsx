import React, { ReactElement, ReactNode } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home.component";
import { DetailsScreen } from "../../details.component";
import "react-native-gesture-handler";
import { ListCustomItemShowcase } from "../../list.component";
import { BottomNavigation, BottomNavigationTab, Icon, IconElement } from "@ui-kitten/components";
import Fetch from "../../bottomNavigation.component";
import { ImageStyle } from "react-native";
import { HomeNavigator } from "./home.navigato";

const { Navigator, Screen } = createBottomTabNavigator();

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

// const HomeNavigator = (): ReactElement => (
//   <Navigator tabBar={(props: any) => <BottomTabBar {...props} />} headerMode="none">
//     <Screen name="Home" component={HomeScreen} />
//     <Screen name="Details" component={DetailsScreen} />
//     <Screen name="List" component={ListCustomItemShowcase} />
//     <Screen name="Fetch" component={Fetch} />
//   </Navigator>
// );

export const AppNavigator = (): ReactElement => (
  <NavigationContainer theme={navigatorTheme}>
    <HomeNavigator />
  </NavigationContainer>
);
