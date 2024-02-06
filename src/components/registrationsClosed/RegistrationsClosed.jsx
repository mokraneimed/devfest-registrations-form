import React from "react";
import devfestLogo from "../../assets/Logos/devfest.png";

const RegistrationsClosed = () => {
  return (
    <div className="h-96 md:mt-14 mt-10 md:mb-28 mb-20 items-center justify-center flex">
      <div>
        <div>
          <img src={devfestLogo} className="md:w-48 w-32 block mx-auto " />
        </div>

        <div>
          <p className="text-4xl font-extrabold text-center md:text-6xl mt-20">
            Hackathon Registrations <br/>Are Closed
          </p>
          <p className="text-center px-5 text-xs py-3 md:text-xl md:px-40">
            Registrations for the Devfest'22 hackathon are Closed! 
          </p>
          <a href="https://devfest22.gdgalgiers.com">
            <button className=" mt-20 button  px-5 mx-auto block  bg-devfest-blue border-2 border-blue-400 hover:bg-blue-600 rounded-md py-2">
              Devfest Website
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationsClosed;
