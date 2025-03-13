import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chirag Portfolio",
  description: "Portfolio of Chirag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              backgroundColor: "#1E1E1E", 
              color: "#FFFFFF", 
              border: "1px solid #333", 
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", 
              fontSize: "1rem", 
              padding: "16px",
              borderRadius: "10px",
            },
          }}
        />
      </body>
    </html>
  );
}