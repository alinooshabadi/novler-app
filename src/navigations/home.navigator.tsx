import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/core";
import React from "react";
import Fetch from "../../fetch.component";
import { HomeScreen } from "../screens/home.component";
import { BookNavigator } from "./book.navigator";
import { HomeBottomNavigation } from "./home-bottom-navigation.component";
import { LibraryNavigator } from "./library.navigator";

const BottomTab = createBottomTabNavigator<RouteParamList>();

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
    <BottomTab.Screen name="Book" component={BookNavigator} />
  </BottomTab.Navigator>
);
