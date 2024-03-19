import { Inter } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { Locale, i18n } from "@/i18n/i18n-config";
import Header from "./components/Layout/header";
import Folder from "./components/Layout/folder";
import { getDictionary } from "@/i18n/dictionary";
import DictionaryProvider from "@/i18n/dictionary-provider";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../fonts/NexaBook.otf" });

export const metadata = {
  title: "Home",
  description: "Ora dental practice website",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className="scroll-auto">
      <body
        className={`${myFont.className} min-h-screen flex flex-col relative bg-white overflow-x-hidden`}
      >
        <DictionaryProvider dictionary={dictionary}>
          <Header lang={params.lang}/>
          {children}
          <Folder lang={params.lang}/>
        </DictionaryProvider>
      </body>
    </html>
  );
}
