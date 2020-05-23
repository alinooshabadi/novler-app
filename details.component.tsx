import React, { ReactNode } from "react";
import { SafeAreaView, View, StyleSheet, Platform } from "react-native";
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction, Button } from "@ui-kitten/components";

const BackIcon = (props: any): ReactNode => <Icon {...props} name="arrow-back" />;

const styles = StyleSheet.create({
  custom: {
    fontFamily: Platform.OS === "ios" ? "iranyekan" : "iranyekan",
    fontSize: 26,
  },
  white: { backgroundColor: "#fff" },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    margin: 2,
  },
});

export const DetailsScreen = ({ navigation }) => {
  const navigateBack = (): void => {
    navigation.goBack();
  };

  const BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Novler" alignment="center" leftControl={BackAction()} />
      <Divider />
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.row}>
          <Text category="h1">سلام تست فونت</Text>
          <Text category="h2">متن س</Text>
          <Text style={styles.text} category="h3">
            H3
          </Text>
          <Text style={styles.text} category="h4">
            H4
          </Text>
          <Text style={styles.text} category="h5">
            H5
          </Text>
          <Text style={styles.text} category="h6">
            H6
          </Text>
        </View>
        <Button status="primary" size="medium">
          <Text>aa</Text>
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
