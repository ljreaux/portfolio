import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
const { BASE_URL } = process.env;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL || ""),
  title: "Larry Reaux's Portfolio",
  description: "A Modern Web Development Portfolio",
  icons: "/pfp.jpeg",
  openGraph: {
    title: "Larry Reaux's Portfolio",
    description: "A Modern Web Development Portfolio",
    images: "/pfp.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@larryreaux",
    title: "Larry Reaux's Portfolio",
    description: "A Modern Web Development Portfolio",
    images: "/pfp.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
