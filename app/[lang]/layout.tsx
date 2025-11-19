import localFont from "next/font/local";
import "./globals.css";
import { Locale, i18n } from "@/i18n/i18n-config";
import Header from "./components/Header";
import Folder from "./components/Folder";
import { getDictionary } from "@/i18n/dictionary";
import DictionaryProvider from "@/i18n/dictionary-provider";
import Script from "next/script";

const myFont = localFont({ src: "../fonts/NexaBook.otf" });
const baseUrl = "https://www.oradental.lu";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  return {
    title:
      params.lang === "fr"
        ? "Cabinet dentaire ORA : Dentiste et Orthodontiste à Differdange"
        : "ORA Dental Clinic – Dentist & Orthodontist in Differdange",

    description:
      params.lang === "fr"
        ? "Ora Dental – Cabinet dentaire et orthodontie à Differdange."
        : "Ora Dental – Dental clinic and orthodontics in Differdange.",

    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        lu: `${baseUrl}/lu`,
        pt: `${baseUrl}/pt`,
        "x-default": `${baseUrl}/fr`,
      },
    },

    icons: {
      icon: "/favicon.ico",
    },
  };
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
