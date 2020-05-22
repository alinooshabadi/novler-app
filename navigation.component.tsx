import React, { ReactElement, ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./home.component";
import { DetailsScreen } from "./details.component";
import "react-native-gesture-handler";
import { ListCustomItemShowcase } from "./list.component";
import { BottomNavigation, BottomNavigationTab, Icon } from "@ui-kitten/components";
import Fetch from "./bottomNavigation.component";

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

const BellIcon = (props) => <Icon {...props} name="bell-outline" />;

const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

const BottomTabBar = ({ navigation, state }): ReactNode => (
  <BottomNavigation selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="کتابخانه" icon={BellIcon} />
    <BottomNavigationTab title="نقل‌قول" icon={EmailIcon} />
    <BottomNavigationTab title="خانه" icon={PersonIcon} />
    <BottomNavigationTab title="Get" icon={PersonIcon} />
  </BottomNavigation>
);

const HomeNavigator = (): ReactElement => (
  <Navigator tabBar={(props: any) => <BottomTabBar {...props} />} headerMode="none">
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Details" component={DetailsScreen} />
    <Screen name="List" component={ListCustomItemShowcase} />
    <Screen name="Fetch" component={Fetch} />
  </Navigator>
);

export const AppNavigator = (): ReactElement => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
