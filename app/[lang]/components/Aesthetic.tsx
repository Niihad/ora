import Card from "./Card";

export default function Aesthetic({ page, lang }: any) {
  interface Aesthetic {
    title: string;
    image: string;
    text: string[];
    link: string;
  }

  interface Pair {
    value: string | any;
    show: string;
    link?: string;
  }

  const buildParams = (params: Aesthetic) => {
    const res: Pair[] = [
      { value: params.title, show: "bottom" },
      { value: params.image, show: "bottom" },
    ];
    if (params.text.length > 0) {
      params.text.map((val) => res.push({ value: val, show: "bottom" }));
    }
    if (params.link) {
      res.push({
        value: params.link,
        show: "bottom",
        link: `/${lang}/aesthetic`,
      });
    }
    return res;
  };

  return (
    <div className="bg-neutral-100 py-14 lg:py-24" id="aesthetic">
      <div className="max-w-screen-2xl mx-auto px-4">
        <Card key={"aesthetic"} sens={"left"} params={buildParams(page)} />
      </div>
    </div>
  );
}
