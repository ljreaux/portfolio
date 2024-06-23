import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Larry Reaux's Portfolio",
  description: "A Modern Web Development Portfolio",
  icons: "/pfp.jpeg",
  openGraph: {
    title: "Larry Reaux's Portfolio",
    description: "A Modern Web Development Portfolio",
    type: "website",
    url: "https://larryreaux.com",
    siteName: "Larry Reaux's Portfolio",
    images: "/pfp.jpg",
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
