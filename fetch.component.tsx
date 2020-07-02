import { Card, List, Text } from "@ui-kitten/components";
import React, { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import useSWR, { mutate } from "swr";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});

const Fetch = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  const fetchJSON = async (...args) => {
    console.log("fetch");
    const res = await fetch(...args);
    setRefreshing(false);
    return await res.json();
  };

  const { data } = useSWR("http://novler.com/api/quotes/getrandom", fetchJSON);

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">{info.item.user}</Text>
    </View>
  );

  const onRefresh = React.useCallback(() => {
    console.log("refresh");
    mutate("http://novler.com/api/quotes/getrandom");
    setRefreshing(true);
  }, [refreshing]);

  const renderItemFooter = (info, navigation, footerProps): any => (
    <Text
      {...footerProps}
      onPress={() => {
        navigation.push("Book", {
          itemId: info.item?.novelNovlerId,
        });
      }}
    >
      {console.log(navigation)}
      {info.item.novel}
    </Text>
  );

  const renderItem = (info): any => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={(headerProps) => renderItemFooter(info, navigation, headerProps)}
    >
      <Text>{info.item.text}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      {data ? (
        <List
          contentContainerStyle={styles.contentContainer}
          data={data.quotes}
          onRefresh={onRefresh}
          refreshing={refreshing}
          renderItem={renderItem}
        />
      ) : (
        <Text>loading</Text>
      )}
    </View>
  );
};

export default Fetch;
