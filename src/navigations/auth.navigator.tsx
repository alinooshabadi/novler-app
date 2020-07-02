import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Login } from "../screens/auth/login.screen";
import { Register } from "../screens/auth/register.screen";

const Stack = createStackNavigator<{}>();
interface AuthStackProps {}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        options={{
          headerTitle: "Sign In",
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
        }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};
