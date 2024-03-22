"use client";

import { I18nextProvider } from "react-i18next";

import i18n from "@/utils/i18n";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
);

export default Providers;
