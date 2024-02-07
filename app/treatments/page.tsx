"use client";

import Card from "../components/Layout/Card";
import { getTreatments } from "../data/data";

export default function Treatments() {
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

  const style = [
    "bg-slate-200 py-14 lg:py-24",
    "bg-slate-50 py-14 lg:py-24",
    "bg-gray-300 py-14 lg:py-24",
  ];

  return (
    <>
      {getTreatments.map((treatment, index) => (
        <div
          className={style[index % 3]}
          id={treatment.title}
          key={treatment.title}
        >
          <Card
            sens={index % 2 ? "left" : "right"}
            params={buildParams(treatment, index % 2 ? "right" : "left")}
          />
        </div>
      ))}
    </>
  );
}
