import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

import useRequest from "./useRequest";
import { Service } from "../config/service";
import { flattenRequest } from "../util/requestUtil";

export default interface ApplicationRequest
  extends Pick<AxiosRequestConfig, "url" | "baseURL" | "method" | "params" | "data"> {
  cacheKey?: number;
}

export const useService = <T>(request: ApplicationRequest | null): Service<T> => {
  const [result, setResult] = useState<Service<T>>({
    status: "loading",
  });

  const { data, error } = useRequest<T>(request);

  console.log("--- useService", result, data);

  useEffect(() => {
    setResult({
      status: "loading",
    });
  }, [result.status, flattenRequest(request)]);

  if (data && result.status != "loaded") {
    console.log("data loaded:", data);
    console.log("error loaded:", error);

    setResult({ status: "loaded", payload: data });
  }

  return result;
};
