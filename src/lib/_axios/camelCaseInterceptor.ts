import type { AxiosError, AxiosResponse } from "axios";

import { toCamelCase } from "@/utils/camelCase";

export const camelCaseInterceptor = {
  onFulfilled(response: AxiosResponse) {
    if (response.data && typeof response.data === "object")
      response.data = toCamelCase(response.data);
    return response;
  },
  onRejected(error: AxiosError) {
    return Promise.reject(error);
  },
};
