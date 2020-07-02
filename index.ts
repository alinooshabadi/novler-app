import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/app/app.component";

AppRegistry.registerComponent(appName, () => App);
