import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/TransitionProvider/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LBRM Portfolio App",
  description: "Best animated portfolio app I have ever seen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
