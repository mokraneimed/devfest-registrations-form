import React from "react";
import yellowLine from "../../assets/shapes/yellowLine.png";
import gdgYellowLogo from "../../assets/Logos/GDGYellowLogo.png";
import devfestLogo from "../../assets/Logos/devfest.png";
const Footer = () => {
  return (
    <div>
      <div className="md:flex gap-8 px-10">
        <div className="md:w-5/12 w-full">
          <div>
            <img src={yellowLine} className="w-full h-4 mt-2" />
          </div>
          <div className="h-52 w-full mx-auto items-center justify-center flex">
            <img src={gdgYellowLogo} className="md:w-1/2 w-2/3" />
          </div>
          <div>
            <img src={yellowLine} className="w-full h-4 " />
          </div>
        </div>
        <div className="md:w-7/12 w-full">
          <div>
            <img src={yellowLine} className="w-full h-4" />
          </div>
          <div className="h-52 w-full items-center text-center flex justify-center md:p-10 p-2 text-xs md:text-sm">
            <p>
              “DevFest”, short for “Developer Festival” is an annual technical
              event organized by Google Developers Groups (GDGs), aiming to
              deliver conferences and workshops to students, developers,
              professionals and everyone passionate about the tech field. It is
              considered as a great opportunity for them to network with tech
              enthusiasts and get updated about the latest trends.
              <p className="pt-5">GDG ALGIERS</p>
            </p>
           
          </div>
          <div>
            <img src={yellowLine} className="w-full h-4" />
          </div>
        </div>
      </div>
      <div className="pt-32 pb-10 items-center justify-center flex">
        <img src={devfestLogo} className="block w-1/2 md:w-1/6" />
      </div>
    </div>
  );
};

export default Footer;
