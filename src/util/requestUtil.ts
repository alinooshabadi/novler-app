import ApplicationRequest from "./../hooks/useService";

export const flattenRequest = (request: ApplicationRequest | null): string => {
  const url = request?.url;

  return `${url}${JSON.stringify(request?.data)}`;
};
