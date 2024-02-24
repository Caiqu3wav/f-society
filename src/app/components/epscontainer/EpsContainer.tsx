'use client';
import { useState } from "react";
import { FaLowVision, FaAngleDown } from "react-icons/fa";
import { episodes } from "../../data/eps";
import Modal from "../Modal/Modal";

export default function EpsContainer() {
  const [isListVisible, setListVisible] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEpLink, setSelectedEpLink] = useState<string | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleList = (season: number) => {
    setListVisible(!isListVisible);
    setSelectedSeason((prevSeason) => (prevSeason === season ? null : season));
  };

const proxyServerUrl = 'http://localhost:3002';
  

  return (
    <div className="flex flex-col w-[100%] bg-slate-900">
      {episodes.map((season) => (
        <div key={season.id}>
          <div className="flex flex-row justify-between">
            <button
              onClick={() => toggleList(season.id)}
              className="flex justify-between text-blue-400 w-full"
            >
              <h1 className="text-blue-400 text-xl pl-2">
                Temporada: {season.temporada}
              </h1>
              {isListVisible && selectedSeason === season.id ? (
                <FaLowVision size={26} className="midthree:size-5 pr-2" />
              ) : (
                <FaAngleDown size={30} className="pr-2" />
              )}
            </button>
          </div>
          <ul
            className={`flex flex-col ml-2 mr-2 h-fit text-lg midthree:text-[13px] text-white w-[100%] gap-4 ${
              isListVisible && selectedSeason === season.id
                ? "visible"
                : "hidden"
            }`}
          >
            {season.eps.map((episode) => (
  <li key={episode.id}>
    Episódio {episode.ep}: <br />
    <button
      onClick={() => {
        openModal();
        setSelectedEpLink(`${proxyServerUrl}/proxy-video?url=${episode.linkEp}`)
      }}
      className="text-blue-300 font-semibold"
    >
      {episode.versao}
    </button>
    <Modal closeModal={closeModal} isOpen={isModalOpen} linkEp={selectedEpLink} />
  </li>
))}
          </ul>
        </div>
      ))}
    </div>
  );
}