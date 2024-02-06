import React from "react";
import headerBg from "../../assets/images/headerBg.png";
import linesLeft from "../../assets/shapes/3LinesLeft.png";
import linesRight from "../../assets/shapes/3LinesRight.png";
import yellowLine from "../../assets/shapes/yellowLine.png";

const Header = () => {
  return (
    <div className="w-full md:h-52 h-18  relative">
      <div className="w-full h-full absolute t-0 b-0 z-0">
        <img src={headerBg} className="w-full h-full" />
      </div>
      <div className="h-full  w-fit mx-auto md:py-20 py-12 z-50 relative text-devfest-black md:text-3xl text-md ">
        <div className="flex gap-2  w-fit mx-auto text-center font-bold">
          <img src={linesLeft} className="md:w-10 md:h-10 w-8 h-6" />
          Devfest22’Algiers Hackathon Registrations Form
          <img src={linesRight} className="md:w-10 md:h-10 w-8 h-6" />
        </div>
        <div className="px-5 lg:w-1/2 mx-auto w-11/12">
          <img src={yellowLine} />
        </div>
      </div>
    </div>
  );
};

export default Header;
