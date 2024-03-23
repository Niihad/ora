"use client";

import Card from "../components/Layout/Card";
import { useDictionary } from "@/i18n/dictionary-provider";

export default function Treatments() {
  const treatments = useDictionary().treatments;
  interface Treatment {
    title: string;
    image: string;
    question: string;
    description: string;
  }

  const buildParams = (params: Treatment, sens: string) => {
    return [
      { value: params.title, show: "top" },
      { value: params.image, show: sens },
      { value: params.question, show: "bottom" },
      { value: params.description, show: "bottom" },
    ];
  };

  const style = ["bg-white py-14 lg:py-24 overflow-x-hidden", "bg-neutral-100 py-14 lg:py-24 overflow-x-hidden "];

  return (
    <div className={"pt-10 sm:pt-0 "}>
      {treatments.map((treatment : Treatment, index: any) => (
        <div
          className={style[index % 2]}
          id={treatment.title}
          key={treatment.title}
        >
          <Card
            sens={index % 2 ? "left" : "right"}
            params={buildParams(treatment, index % 2 ? "right" : "left")}
          />
        </div>
      ))}
    </div>
  );
}
