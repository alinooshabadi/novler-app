import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RouteParamList = {
  Home: undefined;
  List: undefined;
  Fetch: undefined;
  Book: { itemId: string };
};

export type RouteNavProps<T extends keyof RouteParamList> = {
  navigation: StackNavigationProp<RouteParamList, T>;
  route: RouteProp<RouteParamList, T>;
};
