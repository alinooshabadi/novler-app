import React from "react";
import { Image, ImageRequireSource } from "react-native";

const IconProvider = (source: ImageRequireSource) => ({
  toReactElement: ({ animation, ...style }) => <Image style={style} source={source} />,
});

export const AppIconsPack = {
  name: "app",
  icons: {
    auth: IconProvider(require("../assets/images/icons/icon-articles.png")),
  },
};
