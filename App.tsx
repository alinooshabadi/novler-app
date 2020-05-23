import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React, { ReactElement } from "react";
import { StatusBar, I18nManager } from "react-native";
import { AppNavigator } from "./navigation.component";
import { ThemeContext } from "./theme-context";
import { default as mytheme } from "./theme.json";
import { BottomNavigationAccessoriesShowcase } from "./bottomNavigation.component";

declare const global: { HermesInternal: null | {} };

const App = (): ReactElement => {
  // set app RTL
  console.log("RTL:", I18nManager.isRTL);
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(true);

  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={{ ...eva[theme], ...mytheme }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
export default App;
