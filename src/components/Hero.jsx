import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import VHicon from "../assets/verhuiswagenIcon.png";
import NPicon from "../assets/9persoonsBusjeHuren.jpg";
import VWicon from "../assets/volkwagenBusjeIcon.jpg";
import BBicon from "../assets/bestelBusjeIcon.jpg";
import PBicon from "../assets/persoonsBusjeIcon.jpg";
import VBicon from "../assets/verhuisBusjeHuren.png";

const Hero = () => {
  return (
    <div className=" text-[#6e47cf]">
      <div className=" bg-image w-full mt-[-96px] h-screen mr-auto text-center flex flex-col justify-center ">
        <h1
          className="md:text-5xl sm:text-6xl  font-bold md:py-6 absolute top-10  ml-[45px] w-[950px] "
          style={{ whiteSpace: "nowrap" }}
        >
          Voordelig{" "}
          <span className="text-[#3e257c] inline">busjes huren, </span>
          bespaar direct!
        </h1>
        <div class="bg-white w-[440px] h-[520px] mr-auto ml-[70px] mt-[90px] rounded-lg shadow-xl p-5">
          <div class="py-2 ">
            <a
              class="flex items-center justify-between text-[#6e47cf] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              href="#"
            >
              <img
                src={PBicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">Persoonsbusje Huren</span>
              <BiChevronRight size={20} className="ml-10 text-[#3e257c]" />
            </a>
            <a
              class="flex items-center justify-between text-[#6e47cf] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              href="#"
            >
              <img
                src={VHicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">Verhuiswagen huren</span>
              <BiChevronRight size={20} className="ml-10 text-[#3e257c]" />
            </a>

            <a
              class="flex items-center justify-between text-[#6e47cf] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              href="#"
            >
              <img
                src={VWicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">Volkswagen Busje Huren</span>
              <BiChevronRight size={20} className="ml-10 text-[#3e257c]" />
            </a>
            <a
              class="flex items-center justify-between text-[#6e47cf] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              href="#"
            >
              <img
                src={VBicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">Verhuisbusje Huren</span>
              <BiChevronRight size={20} className="ml-10 text-[#3e257c]" />
            </a>
            <a
              class="flex items-center justify-between text-[#6e47cf] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              href="#"
            >
              <img
                src={BBicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">Bestelbusje Huren</span>
              <BiChevronRight size={20} className="ml-10 text-[#3e257c]" />
            </a>
            <a
              class="flex items-center justify-between text-[#6e47cf] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              href="#"
            >
              <img
                src={NPicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">9 Persoons Busje Huren</span>
              <BiChevronRight size={20} className="ml-10 text-[#3e257c]" />
            </a>
          </div>
          <button class="mt-4 py-3 px-4 bg-[white] text-[#6e47cf] border border-[#6e47cf] w-full rounded-md shadow-md hover:bg-[#d6c6fe]">
            Meer producten
          </button>
        </div>
      </div>

      <div className="w-[1068px] m-auto h-[52px] text-center flex flex-col md:flex-row md:justify-center items-center mt-10">
  <div className="w-full md:w-1/3 flex justify-center items-center space-x-2 px-2">
    <AiOutlineCheckCircle size={20} className="ml-8 text-[#3e257c]" />
    <div className="flex flex-col">
      <p className="font-bold">Onze persoons busjes</p>
      <p className="mt-1 text-[#3e257c]">Voor al jouw vervoersbehoeften</p>
    </div>
  </div>
  <div className="w-full md:w-1/3 flex justify-center items-center space-x-2 px-2 mt-4 md:mt-0">
    <AiOutlineCheckCircle size={20} className="ml-8 text-[#3e257c]" />
    <div className="flex flex-col">
      <p className="font-bold">Eenvoudige verhuur</p>
      <p className="mt-1 text-[#3e257c]">Geen verborgen kosten</p>
    </div>
  </div>
  <div className="w-full md:w-1/3 flex justify-center items-center space-x-2 px-2 mt-4 md:mt-0">
    <AiOutlineCheckCircle size={20} className="ml-8 text-[#3e257c]" />
    <div className="flex flex-col">
      <p className="font-bold">Voordeligste tarieven</p>
      <p className="mt-1 text-[#3e257c]">Altijd de beste prijs</p>
    </div>
  </div>
</div>

      <div className="w-full h-[90px] border-b border-gray-300 "></div>
    </div>
  );
};

export default Hero;
