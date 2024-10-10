import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {

    const url = "https://www.oradental.lu";
    const members = ["dr-mathilde-ajdarpasic","dr-ludovic-altermatt","dr-alvin-lesdel","dr-alain-zeidan","dr-agnès-hussein","dr-gorian-freminet","dr-clara-mourot"];
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
      },]
      const listMenbers = members.map((menber) =>
        ({
            url: url+'/fr/'+menber,
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