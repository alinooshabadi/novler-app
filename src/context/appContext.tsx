import React from "react";
import Setting from "../models/setting";

export interface AppContextState {
  setting: Setting;
}

interface AppContextActions {
  setPmSettings: (setting: Setting) => void;
}

export interface AppContextInterface {
  state: AppContextState;
  actions: AppContextActions;
}

export const Context = React.createContext<AppContextInterface | null>(null);
export const AppContextConsumer = Context.Consumer;
