import Profil from "./profil";
import { Locale } from "@/i18n/i18n-config";
import { getDictionary } from "@/i18n/dictionary";

const getUrlName = (lang: Locale, name: string) => {
  const res = name.split(" ");
  return `${res[0]}-${res[1]}-${res[2]}`;
};

export async function generateStaticParams({
  params,
}: {
  params: { lang: Locale };
}) {
  const { lang } = params;
  const teams = (await getDictionary(params.lang)).teams;
  return teams.filter((profil) => profil.knowledge.length > 0 && profil.diplome.length).map((profil: any) => ({
    lang: lang,
    teamId: decodeURI(getUrlName(lang, profil.name).toLowerCase()),
  }));
}

export default function Page({ params }: { params: { lang: Locale, teamId: string } }) {
  return <Profil key={params.teamId} params={params}/>;
}
