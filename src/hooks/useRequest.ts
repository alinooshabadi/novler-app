import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import useSWR, { ConfigInterface, responseInterface } from "swr";
import ApplicationRequest from "./useService";
import RequestConfig from "../config/requestConfig";
import { flattenRequest } from "../util/requestUtil";

interface Return<Data, Error>
  extends Pick<
    responseInterface<AxiosResponse<Data>, AxiosError<Error>>,
    "isValidating" | "revalidate" | "error" | "mutate"
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<ConfigInterface<AxiosResponse<Data>, AxiosError<Error>>, "initialData"> {
  initialData?: Data;
}

export default function useRequest<Data = unknown, Error = unknown>(
  request: ApplicationRequest | null,
  { initialData, ...configuration }: Config<Data, Error> = {},
): Return<Data, Error> {
  if (request) request.baseURL = RequestConfig.Endpoint;
  console.log("axios", flattenRequest(request));
  console.log("url:", `${request?.baseURL}${request?.url}`);
  console.log("data:", request?.data);

  const config: Config<Data, Error> = {
    ...configuration,
    onErrorRetry: (error, key, option, revalidate, { retryCount }) => {
      console.log("error: retry ...");
    },
    onSuccess: (data, key, config) => {
      console.log("success", data, config);
    },
    onError: (err, key) => {
      console.log("Error", err);
    },
    shouldRetryOnError: false,
    revalidateOnFocus: false,
    errorRetryCount: 1,
    dedupingInterval: 1,
    errorRetryInterval: 500,
  };

  const { data: response, error, isValidating, revalidate, mutate } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && flattenRequest(request),

    () => axios(request as AxiosRequestConfig),
    {
      ...config,
      // @ts-ignore
      initialData: initialData && {
        status: 200,
        statusText: "InitialData",
        config: request,
        headers: {},
        data: initialData,
      },
    },
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    revalidate,
    mutate,
  };
}
