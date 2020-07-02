import ApplicationRequest from "../hooks/useService";

interface LoginRequest {
  username: string;
  password: string;
}

export class AuthServices {
  public static login(username: string, password: string): ApplicationRequest {
    const body: LoginRequest = {
      username: username,
      password: password,
    };

    return { url: `users/authenticate`, method: "POST", data: body };
  }
}
