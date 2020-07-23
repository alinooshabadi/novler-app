import { Card, List, Text } from "@ui-kitten/components";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useService } from "../hooks/useService";
import { Quote } from "../models/quote";
import { QuoteServices } from "../services/quote-serivice";

interface Props {}

export const QuotesScreen: React.FC<Props> = ({ navigation }) => {
  const data = useService<Quote[]>(QuoteServices.random());
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {
    data.status == "loaded";
    setRefreshing(false);
  }, [data.status]);

  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">{info.item.user}</Text>
    </View>
  );

  const onRefresh = React.useCallback(() => {
    console.log("refresh");
    setRefreshing(true);
  }, [refreshing]);

  const renderItemFooter = (info: Quote, navigation, footerProps): any => (
    <Text
      {...footerProps}
      onPress={() => {
        navigation.push("Book", {
          itemId: info.novel_Id,
        });
      }}
    >
      {console.log(navigation)}
      {info.}
    </Text>
  );

  const renderItem = (quote: Quote): any => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, quote)}
      footer={(headerProps) => renderItemFooter(quote, navigation, headerProps)}
    >
      <Text>{quote.text}</Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      {data.status === "loaded" ? (
        <List
          contentContainerStyle={styles.contentContainer}
          data={data.payload}
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
