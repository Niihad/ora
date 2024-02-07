"use client";

import { useEffect } from "react";
import Card from "../components/Layout/Card";
import { getTeams } from "../data/data";

export default function TeamPage({ params }: { params: { teamId: string } }) {
  interface Team {
    name: string;
    image: string;
    speciality: string;
  }

  const info: string[] = params.teamId.split("-");
  info.shift();
  const profil = getTeams.find(
    (val) => val.name.toLowerCase() === info.join(" ")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buildParams = (params: Team) => {
    return [
      { value: "Dr. " + params.name, show: "top" },
      { value: params.image, show: "right" },
      {
        value:
          "Le cabinet dentaire ORA vous accueille à Differdange pour vous proposer des soins dentaires de qualité. Notre but est de s’adapter à vos besoins et de répondre à vos attentes.",
        show: "bottom",
      },
      {
        value:
          "Notre équipe pluri-disciplinaire est composée de médecins dentistes de différentes spécialités. Tous les soins se font directement au cabinet : visites de contrôle, soins conservateurs, orthodontie ou même les chirurgies. Cela permet à nos patients d’avoir accès en un seul lieu à un plateau technique complet.",
        show: "bottom",
      },
      { value: "Prendre rendez-vous", show: "bottom" },
    ];
  };

  return (
    <div className="bg-gray-300">
      {profil === undefined ? (
        <div className="mt-auto">Oops! That page can’t be found.</div>
      ) : (
        <div className={"py-14 lg:py-24"} id={profil.name} key={profil.name}>
          <Card sens={"left"} params={buildParams(profil)} />
        </div>
      )}
    </div>
  );
}
