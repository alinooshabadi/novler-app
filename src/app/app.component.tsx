import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import React, { ReactElement } from "react";
import { I18nManager, StatusBar } from "react-native";
import { default as mytheme } from "../../theme.json";
import { AppContextProvider } from "../context/appContetxtProvider";
import { ThemeContext } from "../context/theme/theme-context";
import { AuthProvider } from "../providers/auth.provider";
import { Routes } from "../routes";
import { AppIconsPack } from "./app-icons-pack";

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
        <AuthProvider>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ApplicationProvider {...eva} theme={{ ...eva[theme], ...mytheme }}>
              <StatusBar backgroundColor="#fff" barStyle="dark-content" />
              <Routes />
              {/* <AppNavigator /> */}
            </ApplicationProvider>
          </ThemeContext.Provider>
        </AuthProvider>
      </AppContextProvider>
    </>
  );
};
export default App;
