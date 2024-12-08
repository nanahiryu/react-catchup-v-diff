import type { Metadata } from "next";
import "@/style/globals.css";
import { Provider } from "@/components/ui/provider";

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
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
