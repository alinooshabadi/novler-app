import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/core";
import React, { ReactNode } from "react";
import Fetch from "../../bottomNavigation.component";
import { DetailsScreen } from "../../details.component";

import { HomeScreen } from "../screens/home.component";
import { LibraryNavigator } from "./library.navigator";
import { BottomNavigation, BottomNavigationTab, IconElement, Icon } from "@ui-kitten/components";
import { ImageStyle } from "react-native";
import { HomeBottomNavigation, HomeBottomNavigation2 } from "./home-bottom-navigation.component";

const BottomTab = createBottomTabNavigator();

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ["Home", "Details", "List", "Themes"];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
  return ROOT_ROUTES.find((route) => currentRoute.name === route) !== undefined;
};

const TabBarVisibleOnRootScreenOptions = ({ route }): BottomTabNavigationOptions => {
  const currentRoute = route.state && route.state.routes[route.state.index];
  return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

export const HomeNavigator = (): React.ReactElement => (
  <BottomTab.Navigator
    screenOptions={TabBarVisibleOnRootScreenOptions}
    tabBar={(props) => <HomeBottomNavigation {...props} />}
  >
    <BottomTab.Screen name="Home" component={HomeScreen} />
    <BottomTab.Screen name="List" component={LibraryNavigator} />
    <BottomTab.Screen name="Fetch" component={Fetch} />
  </BottomTab.Navigator>
);
