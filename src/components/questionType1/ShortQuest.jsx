import { useState } from "react";
import blueButton from "../../assets/shapes/blueButtonBg.png";
import { useContext } from "react";
import AppContext from "../../utils/AppContext";
import { useEffect } from "react";
import ErrorAlert from "../shared/ErrorAlert";
import { validatetextInput } from "../../utils/validateInputs";
import requiredIcon from "../../assets/shapes/requiredIcon.png";

const Question = ({ questionData, setCurrentQuestion, display }) => {
  const { formData, updateFormData } = useContext(AppContext);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [displayCompoenent, setDisplay] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    setError(null);
  };

  const nextQuestion = () => {
    let inputValidation = validatetextInput(
      value,
      questionData.name,
      questionData.inputType
    );
    if (!questionData.required || inputValidation.valid) {
      setDisplay(false);
      setCurrentQuestion(questionData.nextQuestion);
      updateFormData(questionData.name, value);
    } else {
      setError(inputValidation.errorMesage);
    }
  };

  useEffect(() => {
    setDisplay(display);
    setValue(formData[questionData.name]);
  }, [questionData.id]);

  return (
    <div
      className={`flex  items-center flex-col px-2  md:p-10 lg:p-10 h-screen ${
        displayCompoenent ? "block" : "hidden"
      } `}
    >
      <div className="h-12 md:h-16 w-full">
        {error ? <ErrorAlert message={error} /> : <></>}
      </div>
      <h1
        className="questionTitle text-white text-md md:text-2xl lg:text-[30px] lg:max-w-[70%] p-4 h-28 text-center "
        id="questionTitle"
      >
        {questionData.Question}
        {questionData.required ? (
          <img src={requiredIcon} className="w-3 h-3 mx-2 inline-block" />
        ) : (
          <></>
        )}
        <p className="mt-3 text-xs md:text-sm text-devfest-orange">
          {questionData.description}
        </p>
      </h1>

      <div className="textInput flex justify-center items-center mt-2 md:mt-8 lg:mt-16 w-10/12  md:w-80 lg:w-96 h-64 ">
        <div className="absolute w-9/12 md:w-72 lg:w-96 ">
          <img className="w-100%" src={blueButton} alt="blueButton" />
        </div>

        <input
          className="w-full  py-5 md:w-[17rem] px-5 lg:w-[23rem] bg-transparent relative outline-none text-black placeholder-blue-800"
          type={questionData.inputType}
          name=""
          value={value}
          onChange={handleChange}
          placeholder={questionData.placeHolder}
        />
      </div>

      <div className="flex mt-10 pt-5 p-0 lg:p-10 justify-between w-[100%] ">
        <div>
          <button
            className={`-skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10 ${
              questionData.previousQuestion != null ? "block" : "hidden"
            }`}
            onClick={() => {
              setDisplay(false);
              setCurrentQuestion(questionData.previousQuestion);
            }}
          >
            Previous
          </button>
        </div>

        <div>
          {value.length > 0 && (
            <button
              className="nextButton -skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10"
              onClick={() => {
                nextQuestion();
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
