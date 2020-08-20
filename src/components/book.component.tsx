import React, { useState } from "react";
import { Image, Platform, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Layout, StyleService, Text, useStyleSheet } from "@ui-kitten/components";
import { RateBar } from "./rate-bar.component";
import { CommentList } from "./comment-list.component";
import useSWR from "swr";
import Book from "../models/novel";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RouteNavProps } from "../types/routeParamList";

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-1",
  },
  commentList: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    overflow: "hidden",
    padding: 16,
  },
  detailsContainer: {
    marginHorizontal: 24,
  },
  productImage: {
    width: 150,
    height: 240,
  },
  authorLabel: {
    marginVertical: 4,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 12,
    marginHorizontal: -4,
  },
  categoryItem: {
    marginHorizontal: 4,
    borderRadius: 16,
  },
  rateBar: {
    marginHorizontal: -4,
  },
  priceLabel: {
    marginVertical: 16,
  },
  buyButton: {
    marginHorizontal: 16,
    marginVertical: 24,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  aboutLabel: {
    marginBottom: 16,
  },
  commentInputLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: "text-basic-color",
  },
  commentInput: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 20,
  },
});

const keyboardOffset = (height: number): number =>
  Platform.select({
    android: 0,
    ios: height,
  });

export const BookPage = ({ navigation, route }: RouteNavProps<"Book">): React.ReactElement => {
  const [inputComment, setInputComment] = React.useState<string>();
  const [rating, setRating] = React.useState<number>(0);

  const styles = useStyleSheet(themedStyles);

  const onBuyButtonPress = (): void => {
    navigation && navigation.navigate("Payment");
  };

  const renderCategory = (category: string, index: number): React.ReactElement => (
    <Button key={index} style={styles.categoryItem} size="tiny">
      {category}
    </Button>
  );

  const renderHeader = (): React.ReactElement => (
    <Layout level="1">
      <View style={styles.header}>
        <Image style={styles.productImage} source={{ uri: `${data?.cover}` }} />
        <View style={styles.detailsContainer}>
          <Text category="s1">{data?.title}</Text>
          <Text style={styles.authorLabel} appearance="hint" category="c1">
            {`Author: ${data?.author}`}
          </Text>
          {/* <View style={styles.categoryContainer}>{product.categories.map(renderCategory)}</View> */}
          <RateBar style={styles.rateBar} value={rating} onValueChange={setRating} />
          <Text style={styles.priceLabel} category="s1">
            {route?.name}
          </Text>
        </View>
      </View>
      <Button style={styles.buyButton} onPress={onBuyButtonPress}>
        خرید کتاب
      </Button>
      <Layout style={styles.descriptionContainer} level="2">
        <Text style={styles.aboutLabel} category="s1">
          About Book
        </Text>
        <Text appearance="hint">description</Text>
      </Layout>
      <Input
        style={styles.commentInput}
        labelStyle={styles.commentInputLabel}
        label="Comments"
        placeholder="Write your comment"
        value={inputComment}
        onChangeText={setInputComment}
      />
    </Layout>
  );

  return (
    <KeyboardAvoidingView style={styles.container} offset={keyboardOffset}>
      <CommentList style={styles.commentList} data={[]} ListHeaderComponent={renderHeader} />
    </KeyboardAvoidingView>
  );
};
