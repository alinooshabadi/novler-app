import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BookScreen } from "../screens/book.component";

const Stack = createStackNavigator();

export const BookNavigator = ({ route }): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    {console.log("Book Navigator:", route?.params?.itemId)}
    <Stack.Screen name="Components" component={BookScreen} initialParams={{ bookId: route?.params?.itemId }} />
  </Stack.Navigator>
);
