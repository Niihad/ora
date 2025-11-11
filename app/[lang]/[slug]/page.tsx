import { redirect, notFound } from 'next/navigation';

function getDictionary(lang: string) {
  switch (lang) {
    case 'en':
      return require('@/i18n/dictionaries/en.json');
    case 'fr':
      return require('@/i18n/dictionaries/fr.json');
    case 'lu':
      return require('@/i18n/dictionaries/lu.json');
    case 'pt':
      return require('@/i18n/dictionaries/pt.json');
    default:
      return null;
  }
}

export default function SingleSlugPage({ params }: { params: { lang: string; slug: string } }) {

  const dict = getDictionary(params.lang);

  if (!dict) return notFound();

  const teamModels = dict.teams;

  const matchedTeam = teamModels.find((teams: any) => teams.slug === params.slug);

  if (matchedTeam) {
    return redirect(`/${params.lang}/teams/${params.slug}`);
  }

  return notFound();
}
