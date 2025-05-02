"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import { Locale } from "@/i18n/i18n-config";
import Card from "../../components/Card";
import { useDictionary } from "@/i18n/dictionary-provider";
import { notFound } from "next/navigation";

interface Profil {
  lang: Locale;
  teamId: string;
}

export default function Profil({
  params,
}: {
  params: { lang: Locale; teamId: string };
}) {
  const { lang, teamId } = params;
  const info: string[] = teamId.split("-");
  const teams = useDictionary().teams;

  interface Team {
    name: string;
    image: string;
    speciality: string;
    knowledge: string[];
    diplome: string[];
    doctena: string;
    call?: string;
  }

  interface Pair {
    value: string | any;
    show: string;
    tel?: string;
  }

  const profil = teams.find(
    (val: Team) =>
      val.name.toLowerCase().split(" ").length > 1 &&
      val.name.toLowerCase().split(" ").slice(1).join(" ") ===
        decodeURI(info.slice(1).join(" "))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buildParams = (params: Team) => {
    const knowledge = params.knowledge.map((val, index) => (
      <li key={index} className="list-[disc]">
        {val}
      </li>
    ));
    const diplome = params.diplome.map((val, index) => (
      <p key={index} className="list-[disc]">
        {val}
      </p>
    ));
    const res: Pair[] = [
      { value: params.name, show: "top" },
      { value: params.image, show: "right" },
      {
        value: <ul className="text-left ml-10">{knowledge}</ul>,
        show: "left",
      },
      {
        value: <div className="text-left ml-4">{diplome}</div>,
        show: "left",
      },
    ];
    if (params.doctena === "")
      res.push({
        value: params.call,
        show: "bottom",
        tel: "tel:+352 27 76 17 09",
      });
    return res;
  };

  if (!profil) {
    notFound();
  }

  return (
    <div className="pt-4 pb-4 sm:pt-0 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto ">
        <Suspense fallback={<p>Loading team...</p>}>
          <div className={"py-14 lg:py-24"} id={profil.name} key={profil.name}>
            <Card key={teamId} sens={"left"} params={buildParams(profil)} />
          </div>
        </Suspense>
        {profil.doctena !== "" && (
          <section
            data-toggle="doc-calendar"
            data-picture="1"
            data-doctor-eid={profil.doctena}
            data-language={lang}
          >
            {""}
          </section>
        )}
      </div>
    </div>
  );
}
