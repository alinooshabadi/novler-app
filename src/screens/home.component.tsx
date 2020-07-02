import { Button, Card, Layout, TopNavigation } from "@ui-kitten/components";
import React, { ReactNode, useContext } from "react";
import { SafeAreaView } from "react-native";
import { ThemeContext } from "../context/theme/theme-context";
import { AuthContext } from "../providers/auth.provider";

export const HomeScreen = ({ navigation }): ReactNode => {
  const themeContext = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);

  const navigateDetails = (): void => {
    navigation?.navigate("Details");
  };
  const navigateList = (): void => {
    navigation?.navigate("List");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Novler" alignment="center" />
      <Layout level="1" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Card>
          <Button style={{ marginVertical: 4 }} onPress={logout}>
            logout
          </Button>
          <Button style={{ marginVertical: 4 }} onPress={navigateList}>
            OPEN List
          </Button>
          <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>
            TOGGLE THEME
          </Button>
        </Card>
      </Layout>
    </SafeAreaView>
  );
};
