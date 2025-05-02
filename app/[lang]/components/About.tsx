import Card from "./Card";

export default function About({ page }: any) {
  interface About {
    title: string;
    image: string;
    text: string[];
  }

  const buildParams = (params: About) => {
    const res = [
      { value: params.title, show: "bottom" },
      { value: params.image, show: "bottom" },
    ];
    if (params.text.length > 0) {
      params.text.map((val) => res.push({ value: val, show: "bottom" }));
    }
    return res;
  };

  return (
    <div className="bg-neutral-100 py-14" id="about">
      <div className="max-w-screen-2xl mx-auto px-4">
        <Card key={"about"} sens={"left"} params={buildParams(page)} />
      </div>
    </div>
  );
}
