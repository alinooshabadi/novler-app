import { AuthNavProps } from "../../navigations/authParamList";
import { Center } from "../../components/center";
import React from "react";
import { Text, Button } from "react-native";

export function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
          // navigation.goBack()
        }}
      />
    </Center>
  );
}
