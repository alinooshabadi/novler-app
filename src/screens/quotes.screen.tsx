import { Card, List, Text } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { useService } from "../hooks/useService";
import { Quote } from "../models/quote";
import { QuoteServices } from "../services/quote-service";

export const QuotesScreen: React.FC<{}> = ({ navigation }) => {
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

  const renderItemHeader = (headerProps, quote: Quote) => (
    <View {...headerProps}>
      <Text category="h6">{quote.novel.title}</Text>
    </View>
  );

  const onRefresh = React.useCallback(() => {
    console.log("refresh");
    // mutate("http://novler.com/api/quotes/getrandom");
    setRefreshing(true);
  }, [refreshing]);

  const renderItemFooter = (quote: Quote, navigation, footerProps): any => (
    <Text
      {...footerProps}
      onPress={() => {
        navigation.push("Book", {
          itemId: quote.id,
        });
      }}
    >
      {quote.novel.title}
    </Text>
  );

  const renderItem = (quote: ListRenderItemInfo<Quote>) => (
    <Card
      style={styles.item}
      status="basic"
      header={(headerProps) => renderItemHeader(headerProps, quote.item)}
      footer={(headerProps) => renderItemFooter(quote.item, navigation, headerProps)}
    >
      <Text>{quote.item.text}</Text>
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
