import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, List, Text } from "@ui-kitten/components";

const data = new Array(8).fill({
  title: "Item",
});

export const ListCustomItemShowcase = () => {
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category="h6">
        {info.item.title} {info.index + 1}
      </Text>
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
      <Text>
        «قتل در قطار سریع‌السیر شرق» یکی از داستانهای بلند آگاتا کریستیی است که قابلیت ساخت یک فیلم سینمایی از روی آن
        وجود دارد. در سال ۱۹۷۴ سیدنی لومت فیلمی سینمایی بر اساس این داستان ساخت که بسیار تحسین شد و یکی از بهترین
        برداشتها از این کتاب به حساب می‌آید. دوستداران آگاتا کریستی می‌دانند که در تمام کتبهای او داستان حول محور حل
        معمای قتل است و نه چیز دیگر و هر شخصیت یا داستانی فرعی تنها برای منحرف کردن خواننده از موضوع اصلی است. نسخه سال
        ۱۹۷۴ دقیقاً در همین جهت است. طرح معما و حل آن. نه فلسفه‌بافی هست نه کشاکش میان شخصیتها.
      </Text>
    </Card>
  );

  return <List contentContainerStyle={styles.contentContainer} data={data} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});
