"use client";

import { useEffect, useState } from "react";
import { useDictionary } from "@/i18n/dictionary-provider";

export default function ModalPop() {
  const modalPop = useDictionary().modelPop;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("popupClosed");
    if (!hasSeenPopup) setIsOpen(true);
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("popupClosed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white max-w-3xl w-full shadow-lg overflow-hidden flex flex-col md:flex-row animate-fadeIn w-[340px] md:w-full border border-white">
        <button
          onClick={closePopup}
          className="absolute top-0 right-3 text-white hover:text-white text-5xl z-10"
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="w-full md:w-1/2 p-8 px-6 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4 text-center uppercase">
            {modalPop.title}
          </h2>

          <p className="leading-relaxed mb-6 text-center my-4">
            {modalPop.text[0]}
          </p>

          <p className="leading-relaxed text-center">{modalPop.text[1]}</p>
        </div>

        <div className="relative w-full md:w-1/2  md:h-auto shrink-0 order-first md:order-none">
          <div
            className="
          relative w-full max-w-3xl h-[280px] md:h-[340px]
          bg-cover bg-center bg-no-repeat
          border border-white 
          flex items-center justify-center
        "
            style={{ backgroundImage: `url('${modalPop.image}')` }}
          >
            <div
              className="
            bg-gray-260 text-center
            py-10 max-w-xs w-full
          "
            >
              <h2 className="text-xl font-semibold mb-4 uppercase">
                {modalPop.text[2]}
              </h2>
              <p className="text-xs md:mb-2 mb-4 italic">{modalPop.text[3]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
