import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/header";
import Folder from "./components/Layout/folder";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Ora dental practice website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Folder />
      </body>
    </html>
  );
}
