import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React, { ReactElement } from "react";
import { I18nManager, StatusBar } from "react-native";
import { AppNavigator } from "../navigations/app-navigator.component";
import { ThemeContext } from "../context/theme/theme-context";
import { AppContextProvider } from "../context/appContetxtProvider";
import { default as mytheme } from "../../theme.json";
import { AppIconsPack } from "./app-icons-pack";

declare const global: { HermesInternal: null | {} };

const App = (): ReactElement => {
  // set app RTL
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(true);

  const [theme, setTheme] = React.useState("light");

  const toggleTheme = (): void => {
    let s;
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };
  return (
    <>
      <IconRegistry icons={[EvaIconsPack, AppIconsPack]} />
      <AppContextProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={{ ...eva[theme], ...mytheme }}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <AppNavigator />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </AppContextProvider>
    </>
  );
};
export default App;
