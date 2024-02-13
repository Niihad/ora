"use client";

import { useEffect } from "react";
import Card from "../components/Layout/Card";
import { getTeams } from "../data/data";
import { FaRegSadTear } from "react-icons/fa";

export default function TeamPage({ params }: { params: { teamId: string } }) {
  interface Team {
    name: string;
    image: string;
    speciality: string;
    knowledge: string[];
    diplome: string[];
  }

  const info: string[] = params.teamId.split("-");
  info.shift();
  const profil = getTeams.find(
    (val) => val.name.toLowerCase() === decodeURI(info.join(" "))
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
      <li key={index} className="list-[disc]">
        {val}
      </li>
    ));
    return [
      { value: "Dr. " + params.name, show: "top" },
      { value: params.image, show: "right" },
      {
        value: <ul className="text-left ml-10">{knowledge}</ul>,
        show: "left",
      },
      {
        value: <ul className="text-left ml-10">{diplome}</ul>,
        show: "left",
      },
      { value: "Prendre rendez-vous", show: "bottom" },
    ];
  };

  return (
    <div className="bg-gray-300 ">
      {profil === undefined ? (
        <div className="flex justify-center"><div className="sm:text-3xl text-xl font-bold ">
          <div className="flex justify-center text-align my-10 mt-28"><FaRegSadTear size="200px" color="black" /></div>
        
        <h1 className="my-10 ">Oops! That page can’t be found.</h1>
      </div></div>
        
      ) : (
        <div className={"py-14 lg:py-24"} id={profil.name} key={profil.name}>
          <Card sens={"left"} params={buildParams(profil)} />
        </div>
      )}
    </div>
  );
}
