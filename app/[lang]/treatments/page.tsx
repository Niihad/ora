"use client";

import Card from "../components/Card";

import { useDictionary } from "@/i18n/dictionary-provider";

export default async function TreatmentsPage() {
  const treatments = useDictionary().treatments;
  interface Treatment {
    title: string;
    image: string;
    text: string[];
  }

  const buildParams = (params: Treatment, sens: string) => {
    const res = [
      { value: params.title, show: "top" },
      { value: params.image, show: sens },
    ];
    if (params.text.length > 0) {
      params.text.map((val) => res.push({ value: val, show: "bottom" }));
    }
    return res;
  };

  const style = [
    "bg-white py-12 md:py-14 lg:py-18 2xl:py-24 overflow-x-hidden ",
    "bg-neutral-100 py-12 md:py-14 lg:py-18 2xl:py-24 overflow-x-hidden",
  ];

  return (
    <div className={"pt-0"}>
      {treatments.map((treatment: Treatment, index: any) => (
        <div
          className={style[index % 2]}
          id={treatment.title}
          key={treatment.title}
        >
          <div className={"max-w-screen-2xl mx-auto px-4"}>
            <Card
              key={index}
              sens={index % 2 ? "left" : "right"}
              params={buildParams(treatment, index % 2 ? "right" : "left")}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
