import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ara",
  description: "KAIST's official community service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
