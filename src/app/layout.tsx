import type { Metadata } from "next";
import "./globals.scss";
import CookiesBar from "./components/CookiesBar/cookiesBar";

export const metadata: Metadata = {
  title: "Lucie Birulová",
  description: "Lucie Birulová - poradenství",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <CookiesBar />
      </body>
    </html>
  );
}
