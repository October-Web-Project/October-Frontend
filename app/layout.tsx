import { PropsWithChildren } from "react";

import type { Metadata } from "next";

import { pretendard } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        <main className="max-w-[500px] w-full">{children}</main>
      </body>
    </html>
  );
}
