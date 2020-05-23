import { Button, Card, CheckBox, Layout, Text, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { Alert, I18nManager, Platform, SafeAreaView, StyleSheet, Switch, View } from "react-native";
import { ThemeContext } from "../context/theme/theme-context";
import { AppReloadService } from "../services/app-reload.service";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    margin: 2,
  },
  card: {
    margin: 2,
  },
});

export const HomeScreen = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);
  const [isRTL, setisRTL] = React.useState(true);

  const navigateDetails = () => {
    navigation.navigate("Details");
  };
  const navigateList = () => {
    navigation.navigate("List");
  };

  const _onDirectionChange = () => {
    I18nManager.forceRTL(!isRTL);
    setisRTL(true);
    Alert.alert(
      "سلام",
      "Please reload this page to change the UI direction! " +
        "All examples in this app will be affected. " +
        "Check them out to see what they look like in RTL layout.",
    );
  };

  const toggleRtl = (): void => {
    I18nManager.forceRTL(!I18nManager.isRTL);
    I18nManager.allowRTL(I18nManager.isRTL);
    Platform.OS !== "web" && AppReloadService.reload();
  };

  const renderRTLToggle = (): React.ReactElement => (
    <CheckBox checked={I18nManager.isRTL} onChange={toggleRtl} text="RTL" />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Novler" alignment="center" />
      <Layout level="1" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Card style={styles.card} status="success">
          <Text>Success</Text>
          <Switch onValueChange={_onDirectionChange} value={isRTL} />
          {renderRTLToggle()}
        </Card>

        <Card>
          <Text>
            The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian
            Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the
            Asian continent
          </Text>
          <Button style={{ marginVertical: 4 }} onPress={navigateDetails}>
            OPEN DETAILS
          </Button>
          <Button style={{ marginVertical: 4 }} onPress={navigateList}>
            OPEN List
          </Button>
          <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>
            TOGGLE THEME
          </Button>
        </Card>

        <View style={styles.row}>
          <Text style={styles.text} status="primary">
            Primary
          </Text>
          <Text style={styles.text} category="c1">
            C1
          </Text>
          <Text style={styles.text} category="c2">
            C2
          </Text>
          <Text style={styles.text} category="label">
            LABEL
          </Text>
        </View>
      </Layout>
    </SafeAreaView>
  );
};
