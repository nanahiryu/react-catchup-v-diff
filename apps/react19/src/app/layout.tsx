import type { Metadata } from "next";
import "@/style/globals.css";
import { Provider } from "@/provider";

export const metadata: Metadata = {
  title: "React19",
  description: "React19",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
