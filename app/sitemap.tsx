import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {

    const url = "https://www.oradental.lu";
    const members = ["dr-mathilde-ajdarpasic","dr-alvin-lesdel","dr-alain-zeidan","dr-agnès-hussein","dr-gorian-freminet","dr-david-narberger"];
    const site = [{
        url: url+'/fr',
        lastModified: new Date(),
        alternates: {
           languages: {
            en: url+'/en',
            lu: url+'/lu',
            pt: url+'/pt',
          },
        },
      },
      {
        url: url+'/fr/treatments',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: url+'/en/treatments',
            lu: url+'/lu/treatments',
            pt: url+'/pt/treatments',
          },
        },
      },{
        url: url+'/fr/aesthetic',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: url+'/en/aesthetic',
            lu: url+'/lu/aesthetic',
            pt: url+'/pt/aesthetic',
          },
        },
      },{
        url: url+'/fr/aesthetic/face',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: url+'/en/aesthetic/face',
            lu: url+'/lu/aesthetic/face',
            pt: url+'/pt/aesthetic/face',
          },
        },
      },{
        url: url+'/fr/aesthetic/body',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: url+'/en/aesthetic/body',
            lu: url+'/lu/aesthetic/body',
            pt: url+'/pt/aesthetic/body',
          },
        },
      },{
        url: url+'/fr/aesthetic/price',
        lastModified: new Date(),
        alternates: {
          languages: {
            en: url+'/en/aesthetic/price',
            lu: url+'/lu/aesthetic/price',
            pt: url+'/pt/aesthetic/price',
          },
        },
      }]
      const listMenbers = members.map((menber) =>
        ({
            url: url+'/fr/teams/'+menber,
            lastModified: new Date(),
            alternates: {
              languages: {
                en: url+'/en/'+menber,
                lu: url+'/lu/'+menber,
                pt: url+'/pt/'+menber,
              },
            },
          })
      );
    return [...site,...listMenbers]
}