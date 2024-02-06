import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import devfestLogo from "../../assets/Logos/devfest.png";
import AppContext from "../../utils/AppContext";
import yellowLine from "../../assets/shapes/yellowLine.png";

const ThankYouPage = ({ setUser ,setSubmited }) => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  const { formData } = useContext(AppContext);
  return (
    <div className="h-96 md:mt-14 mt-10 md:mb-28 mb-20 items-center justify-center flex">
      <div>
        <div>
          <img src={devfestLogo} className="md:w-48 w-32 block mx-auto " />
        </div>
        <div className="w-fit mx-auto md:flex py-5 mb-20">
          <div>
            You registred as:
            <span className="underline text-devfest-orange px-2">
              {formData.email}
            </span>
          </div>

          <div className="w-32 mx-auto">
            <button
              onClick={() => {
                setUser(null);
                setSubmited(false);
              }}
              className="hover:text-devfest-orange"
            >
              Change Account
            </button>
            <div>
              <img src={yellowLine} />
            </div>
          </div>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-center md:text-7xl ">
            Thank You
          </p>
          <p className="text-center px-5 text-xs py-3 md:text-xl md:px-40">
            Thanks for registering! We would be thrilled to see you on the
            D-day!
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

export default ThankYouPage;
