import axios from "axios";

import { env } from "@/env";
import { camelCaseInterceptor } from "@/lib/_axios";

export const client = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

client.interceptors.response.use(camelCaseInterceptor.onFulfilled, camelCaseInterceptor.onRejected);
