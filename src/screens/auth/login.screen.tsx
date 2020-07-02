import { Layout, StyleService, useStyleSheet, Text, Input, Button } from "@ui-kitten/components";
import React, { useContext } from "react";
import { View, Alert } from "react-native";
import { AuthNavProps } from "../../navigations/authParamList";
import { ListIcon, CloseIcon } from "../../components/icons";
import { KeyboardAvoidingView } from "./keyboardAvoidingView";
import { useService } from "../../hooks/useService";
import { AuthServices } from "../../services/auth-serivice";
import { User, AuthContext } from "../../providers/auth.provider";

export function Login({ navigation }: AuthNavProps<"Login">) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [postRequest, setPostRequest] = React.useState<boolean>(false);
  const { login } = useContext(AuthContext);

  const styles = useStyleSheet(themedStyles);

  console.log("postRequest", postRequest);
  const response = useService<User>(postRequest ? AuthServices.login(email, password) : null);

  if (response.status == "loaded") {
    login(response.payload);
  }

  const onSignUpButtonPress = (): void => {
    navigation && navigation.navigate("SignUp2");
  };

  const onSignInButtonPress = (): void => {
    setPostRequest(true);
  };

  const onForgotPasswordButtonPress = (): void => {
    navigation && navigation.navigate("ForgotPassword");
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Hello
        </Text>
        <Text style={styles.signInLabel} category="s1" status="control">
          Sign in to your account
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Input placeholder="Email" icon={ListIcon} value={email} onChangeText={setEmail} />
        <Text>dds</Text>
        <Input
          //   style={styles.passwordInput}
          placeholder="Password"
          icon={passwordVisible ? ListIcon : CloseIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          onIconPress={onPasswordIconPress}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic"
            onPress={onForgotPasswordButtonPress}
          >
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button style={styles.signInButton} size="giant" onPress={onSignInButtonPress}>
        SIGN IN
      </Button>
      <Button style={styles.signUpButton} appearance="ghost" status="basic" onPress={onSignUpButtonPress}>
        Don't have an account? Create
      </Button>
    </KeyboardAvoidingView>
  );
}
const themedStyles = StyleService.create({
  container: {
    backgroundColor: "background-basic-color-1",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 216,
    backgroundColor: "color-primary-default",
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
