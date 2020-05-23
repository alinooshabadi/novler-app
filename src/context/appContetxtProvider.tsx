import * as React from "react";
import { Component } from "react";
import Setting from "../models/setting";
import { AppContextState, Context } from "./appContext";

class AppContextProvider extends Component<{}, AppContextState> {
  state: AppContextState = {
    setting: { planning: false },
  };

  setPmSettings = (data: Setting): void => {
    this.setState({ setting: data });
  };

  render(): JSX.Element {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            setPmSettings: this.setPmSettings,
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export { AppContextProvider };
export const AppConsumer = Context.Consumer;
