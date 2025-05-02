import Card from "./Card";

export default function Treatments({ page, lang }: any) {
  interface Treatment {
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

  const buildParams = (params: Treatment) => {
    const res: Pair[] = [
      { value: params.title, show: "bottom" },
      { value: params.image, show: "bottom" },
    ];
    if (params.text.length > 0) {
      params.text.map((val) => res.push({ value: val, show: "bottom" }));
    }
    if (params.link) {
      res.push({ value: params.link, show: "bottom", link: `/${lang}/treatments` });
    }
    return res;
  };

  return (
    <div className="py-10 lg:py-24 bg-white" id="treatments">
      <div className="max-w-screen-2xl mx-auto px-4">
        <Card
          key={"treatment"}
          sens={"right"}
          params={buildParams(page)}
        />
      </div>
    </div>
  );
}
