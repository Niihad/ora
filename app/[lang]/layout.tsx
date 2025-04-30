import localFont from "next/font/local";
import "./globals.css";
import { Locale, i18n } from "@/i18n/i18n-config";
import Header from "./components/Header";
import Folder from "./components/Folder";
import { getDictionary } from "@/i18n/dictionary";
import DictionaryProvider from "@/i18n/dictionary-provider";
import Script from "next/script";

const myFont = localFont({ src: "../fonts/NexaBook.otf" });

export const metadata = {
  title: "Cabinet dentaire ORA : Dentiste et Orthodontiste à Differdange",
  description: "Ora dental practice website",
  icons: {
    icon: "https://www.oradental.lu/assets/icon.png",
  },
  openGraph: {
    title: "Cabinet dentaire ORA : Dentiste et Orthodontiste à Differdange",
    type: "website",
    siteName: 'Cabinet dentaire ORA : Dentiste et Orthodontiste à Differdange',
    images: 'https://www.oradental.lu/assets/cabinet.png',
  },
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
          <Header lang={params.lang} />
          {children}
          <Folder lang={params.lang} />
        </DictionaryProvider>
        <Script src="https://api.doctena.lu/js/widgetBooking/calendar/build.php"></Script>
      </body>
    </html>
  );
}
