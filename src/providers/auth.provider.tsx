import React from "react";
import { useState } from "react";
import { AsyncStorage } from "react-native";

export type User = null | { username: string; jwtToken: string };

export const AuthContext = React.createContext<{
  user: User;
  login: (user: User) => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: (user: User) => {
          console.log(user);
          setUser(user);
          AsyncStorage.setItem("user", JSON.stringify(user?.jwtToken));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("user");
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
