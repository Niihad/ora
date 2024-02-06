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
    <html lang="en" className="scroll-auto">
      <body className={`${inter.className} min-h-screen flex flex-col relative bg-slate-50`}>
        <Header />
        {children}
        <Folder />
      </body>
    </html>
  );
}
