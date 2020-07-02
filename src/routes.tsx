import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";

import { AuthContext } from "./providers/auth.provider";
import { Center } from "./components/center";
import { HomeNavigator } from "./navigations/home.navigator";
import { AuthStack } from "./navigations/auth.navigator";

export const Routes: React.FC<{}> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          // decode it
          login();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return <NavigationContainer>{user ? <HomeNavigator /> : <AuthStack />}</NavigationContainer>;
};
