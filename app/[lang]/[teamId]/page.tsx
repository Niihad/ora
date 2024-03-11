"use client";

import { useEffect } from "react";
import Card from "../components/Layout/Card";
import { FaRegSadTear } from "react-icons/fa";
import { useDictionary } from "@/i18n/dictionary-provider";

export default function TeamPage({ params }: { params: { teamId: string } }) {
  const teams = useDictionary().teams;
  interface Team {
    name: string;
    image: string;
    speciality: string;
    knowledge: string[];
    diplome: string[];
  }

  const info: string[] = params.teamId.split("-");

  const profil = teams.find(
    (val: Team) => val.name.toLowerCase() === decodeURI(info.join(" "))
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
      { value: params.name !== "Dr MOUROT Clara" ? "Prendre rendez-vous" : "Appeler pour prendre rendez-vous", show: "bottom" },
    ];
  };

  return (
    <div className="bg-neutral-200 pt-14 sm:pt-0">
      {profil === undefined ? (
        <div className="flex justify-center"><div className="sm:text-3xl text-xl font-bold ">
          <div className="flex justify-center text-align my-10 mt-28"><FaRegSadTear size="200px" color="black" /></div>
        
        <h1 className="my-10">{"Oops! That page can't be found."}</h1>
      </div></div>
        
      ) : (
        <div className={"py-14 lg:py-24"} id={profil.name} key={profil.name}>
          <Card sens={"left"} params={buildParams(profil)} />
        </div>
      )}
    </div>
  );
}
