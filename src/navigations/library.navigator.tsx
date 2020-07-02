import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ListCustomItemShowcase } from "../../list.component";

const Stack = createStackNavigator();

export const LibraryNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Components" component={ListCustomItemShowcase} />
  </Stack.Navigator>
);
