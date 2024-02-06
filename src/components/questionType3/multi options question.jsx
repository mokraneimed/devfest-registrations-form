import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import blueButton from "../../assets/shapes/blueButtonBg.png";
import AppContext from "../../utils/AppContext";
import requiredIcon from "../../assets/shapes/requiredIcon.png";

const MultOptqst = ({ questionData, setCurrentQuestion, display }) => {
  const [choice, setChoice] = useState(null);
  const { formData, updateFormData } = useContext(AppContext);
  const [displayCompoenent, setDisplay] = useState(true);

  const handleChange = (option) => {
    setChoice(option);
  };

  useEffect(() => {
    setDisplay(display);
    setChoice(
      questionData.options
        .map(function (e) {
          return e.option;
        })
        .indexOf(formData[questionData.name])
    );
  }, [questionData.id]);

  return (
    <div
      className={`flex  items-center flex-col px-2  md:p-10 lg:p-10 h-screen ${
        displayCompoenent ? "block" : "hidden"
      }`}
    >
      <div className="h-12 md:h-16 w-full"></div>
      <h1 className="questionTitle text-white  text-md md:text-2xl lg:text-[30px] lg:max-w-[70%] p-4 h-28 text-center ">
        {questionData.Question}
        {questionData.required ? (
          <img src={requiredIcon} className="w-3 h-3 mx-2 inline-block" />
        ) : (
          <></>
        )}

        <p className="py-2 text-xs md:text-sm text-devfest-orange">
        {questionData.description}
        </p>
      </h1>

      <div className="flex justify-center items-center mt-2 md:mt-8 lg:mt-16 w-10/12  md:w-80 lg:w-96 h-64 ">
        <div className=" relative w-full md:w-72 lg:w-96 ">
          {questionData.options.map((option, key) => (
            <div
              key={key}
              className=" options relative my-4 w-full hover:scale-105 cursor-pointer"
              onClick={() => handleChange(key)}
            >
              <img
                className="w-full h-full"
                src={blueButton}
                alt="blueButton"
              />

              <h1 className="absolute w-full md:py-2 bottom-4 inset-x-0  text-white text-2xl text-center  focus:outline-none focus:ring focus:ring-violet-300">
                <label
                  className={`cursor-pointer ${
                    key === choice
                      ? "text-devfest-white underline"
                      : "text-devfest-black"
                  }`}
                >
                  {option.option}
                </label>
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-10 pt-5 p-0 lg:p-10 justify-between w-[100%] ">
        <button
          className="-skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10"
          onClick={() => {
            setDisplay(false);
            setCurrentQuestion(questionData.previousQuestion);
          }}
        >
          Previous
        </button>
        <button
          className={`nextButton -skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10 ${
            choice != null && choice >= 0 ? "block" : "hidden"
          }`}
          onClick={() => {
            setDisplay(false);
            setCurrentQuestion(questionData.options[choice].nextQuestion);
            updateFormData(
              questionData.name,
              questionData.options[choice].option
            );
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MultOptqst;
