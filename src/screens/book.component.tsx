import { Text, TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import useSWR from "swr";
import { BookPage } from "../components/book.component";
import { ArrowIosBackIcon, BookmarkIcon, BookmarkOutlineIcon } from "../components/icons";
import { RouteNavProps } from "../types/routeParamList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const BookScreen = ({ navigation, route }: RouteNavProps<"Book">): React.ReactElement => {
  const { bookId } = route?.params.itemId;
  console.log("Book Screen Loaded:", bookId);

  useEffect(() => {
    () => {
      console.log("useEffect:", bookId);
    };
  }, [bookId]);

  const [bookmarked, setBookmarked] = React.useState<boolean>(false);

  const fetchJSON = async (...args) => {
    console.log("fetch book");
    const res = await fetch(...args);
    return await res.json();
  };

  const { data } = useSWR(`https://novler.com/api/novels/getnovel/${bookId}`, fetchJSON);

  const onBookmarkActionPress = (): void => {
    setBookmarked(!bookmarked);
  };

  const renderBackAction = (): any => <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation?.goBack} />;

  const renderBookmarkAction = (): React.ReactElement => (
    <TopNavigationAction icon={bookmarked ? BookmarkIcon : BookmarkOutlineIcon} onPress={onBookmarkActionPress} />
  );

  return (
    <View style={styles.container}>
      <TopNavigation
        title="Product Details"
        leftControl={renderBackAction()}
        rightControls={[renderBookmarkAction()]}
      />
      {data ? <BookPage navigation={navigation} data={data.novel} /> : <Text>Book</Text>}
    </View>
  );
};
