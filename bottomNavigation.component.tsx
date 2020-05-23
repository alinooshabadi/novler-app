import React from "react";
import { StyleSheet, View } from "react-native";
import useSWR from "swr";
import { List, Card, Text } from "@ui-kitten/components";

const fetchJSON = async (...args) => {
  const res = await fetch(...args);
  return await res.json();
};

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

const Fetch = () => {
  const { data } = useSWR("http://novler.com/api/quotes", fetchJSON);

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">{info.item.user}</Text>
    </View>
  );

  const renderItemFooter = (footerProps) => <Text {...footerProps}>By Wikipedia</Text>;

  const renderItem = (info) => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, info)}
      footer={renderItemFooter}
    >
      <Text>{info.item.text}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      {data ? (
        <List contentContainerStyle={styles.contentContainer} data={data.quotes} renderItem={renderItem} />
      ) : (
        <>loading</>
      )}
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     {data ? (
  //       <>
  //         {data.quotes.map((x) => {
  //           <View>
  //             {console.log(x.user)}
  //             <Text>{x.text}</Text>
  //             <Text>{data.user}</Text>
  //           </View>;
  //         })}
  //       </>
  //     ) : (
  //       <Text>loading...</Text>
  //     )}
  //   </View>
  // );
};

export default Fetch;
