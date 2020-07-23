import ApplicationRequest from "../hooks/useService";

export class QuoteServices {
  public static random(): ApplicationRequest {
    return { url: `quotes/random`, method: "GET" };
  }
}
