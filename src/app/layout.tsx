import type { Metadata } from "next";

import Providers from "@/app/providers";
import { pretendard } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Ara",
  description: "KAIST's official community service",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="ko" className={pretendard.className}>
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
