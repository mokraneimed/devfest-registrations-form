import { signInWithGoogle } from "../../firebase/firebase-config.js";
import devfestLogo from "../../assets/Logos/devfest.png";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div className="h-96 md:mt-14 mt-10 md:mb-28 mb-20 items-center justify-center flex">
      <div>
        <div>
          <img
            src={devfestLogo}
            className="w-60 block mx-auto loadingLogo md:mb-20 mb-10"
          />
        </div>
        <div className="logInButton">
          <p className="text-4xl font-extrabold text-center md:text-7xl ">
            Welcome
          </p>
          <p className="text-center px-5 text-xs py-3 md:text-xl lg:px-52 md:px-32">
            <span className="text-devfest-orange">DevFest22’Algiers</span> is
            here for its 11th edition, with its most awaited hackathon that will
            be held from the <span className="text-devfest-orange">
               1st to the 3rd of december
            </span>
            <br />
            <br /> If you want to take part of this{" "}
            <span className="text-devfest-orange">incredible journey</span>{" "}
            along side your team, get yourself ready and fill out this
            registrations form
          </p>
          <p className="text-center px-5 text-xs py-3 md:text-sm underline lg:px-52 md:px-32 text-red-400">
            Note that all team members must fill out the form
          </p>
        </div>
        <button
          className="button block mx-auto mt-10 logInButton w-60  bg-devfest-blue border-2 border-blue-400 hover:bg-blue-600 rounded-md py-2"
          onClick={signInWithGoogle}
        >
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
