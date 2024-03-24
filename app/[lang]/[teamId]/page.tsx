"use client";

import { Suspense } from "react";
import { useEffect } from "react";
import Card from "../components/Layout/Card";
import { FaRegSadTear } from "react-icons/fa";
import { useDictionary } from "@/i18n/dictionary-provider";
import { usePathname } from "next/navigation";

export default function TeamPage() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const info: string[] = pathname.split("/")[2].split("-");
  const teams = useDictionary().teams;
  interface Team {
    name: string;
    image: string;
    speciality: string;
    knowledge: string[];
    diplome: string[];
    doctena: string;
    call?: string
  }

  const profil = teams.find(
    (val: Team) => val.name.toLowerCase().split(" ").slice(1).join(" ") === decodeURI(info.slice(1).join(" "))
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
    return [
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
      {
        value: params.doctena === "" ? params.call : "",
        show: "bottom",
      },
    ];
  };

  return (
      <div className="pt-14 sm:pt-0 overflow-x-hidden">
        {profil === undefined ? (
          <div className="flex justify-center">
            <div className="sm:text-3xl text-xl font-bold ">
              <div className="flex justify-center text-align my-10 mt-28">
                <FaRegSadTear size="200px" color="black" />
              </div>
              <h1 className="my-10">{"Oops! That page can't be found."}</h1>
            </div>
          </div>
        ) : (
          <>
            <Suspense fallback={<p>Loading team...</p>}>
              <div
                className={"py-14 lg:py-24"}
                id={profil.name}
                key={profil.name}
              >
                <Card sens={"left"} params={buildParams(profil)} />
              </div>
            </Suspense>
            {profil.doctena !== "" && (
              <section
                data-toggle="doc-calendar"
                data-picture="1"
                data-doctor-eid={profil.doctena}
                data-language={lang}
              >
                {" "}
              </section>
            )}
          </>
        )}
      </div>
  );
}
