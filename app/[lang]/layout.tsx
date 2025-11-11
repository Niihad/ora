import localFont from "next/font/local";
import "./globals.css";
import { Locale, i18n } from "@/i18n/i18n-config";
import Header from "./components/Header";
import Folder from "./components/Folder";
import { getDictionary } from "@/i18n/dictionary";
import DictionaryProvider from "@/i18n/dictionary-provider";
import HreflangLinks from "./components/HreflangLinks";
import Script from "next/script";

const myFont = localFont({ src: "../fonts/NexaBook.otf" });

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
  const baseUrl = "https://www.oradental.lu";

  return (
    <html lang={params.lang} className="scroll-auto">
      <head>
        <HreflangLinks baseUrl={baseUrl} />
      </head>
      <body className={`${myFont.className} min-h-screen flex flex-col relative bg-white overflow-x-hidden`}>
        <DictionaryProvider dictionary={dictionary}>
          <Header lang={params.lang} />
          {children}
          <Folder lang={params.lang} />
        </DictionaryProvider>

        <Script src="https://api.doctena.lu/js/widgetBooking/calendar/build.php"></Script>
      </body>
    </html>
  );
}
