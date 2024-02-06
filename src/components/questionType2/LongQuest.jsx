import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import blueButton from "../../assets/shapes/blueButtonBg.png";
import AppContext from "../../utils/AppContext";
import { validatetextInput } from "../../utils/validateInputs";
import ErrorAlert from "../shared/ErrorAlert";
import { db } from "../../firebase/firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import requiredIcon from "../../assets/shapes/requiredIcon.png";

const LongQuest = ({ questionData, setCurrentQuestion, setSubmited }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const { formData, updateFormData } = useContext(AppContext);
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
      setCurrentQuestion(questionData.nextQuestion);
      updateFormData(questionData.name, value);
    } else {
      setError(inputValidation.errorMesage);
    }
  };

  const hackathonCollection = collection(db, "Hackathon participants");

  const submitForm = async () => {
    // Write Your Code Here
    await addDoc(hackathonCollection, formData);
  };


  useEffect(() => {
    setValue(formData[questionData.name]);
  }, [questionData.id]);
  return (
    <div className="flex  items-center flex-col px-2  md:p-10 lg:p-10 h-screen ">
      <div className="h-12 md:h-16 w-full">
        {error ? <ErrorAlert message={error} /> : <></>}
      </div>
      <h1 className="questionTitle text-white text-md md:text-2xl lg:text-[30px] lg:max-w-[70%] p-4 h-28 text-center ">
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
      <div className="textInput flex justify-center items-center text-center mt-2 md:mt-8 lg:mt-16   w-10/12  md:w-1/2 lg:w-1/2 h-64">
        <div className="absolute w-10/12 h-52 md:w-1/2 lg:w-1/2">
          <img className="w-full h-full" src={blueButton} alt="blueButton" />
        </div>
        <textarea
          className="resize-none overflow-y-auto placeholder-blue-800 overflow-hidden py-3 bg-transparent  w-full  h-44 relative outline-none text-black"
          value={value}
          onChange={handleChange}
          placeholder={questionData.placeHolder}
        />
      </div>
      <div className="flex mt-10 pt-5 p-0 lg:p-10 justify-between w-[100%] ">
        <button
          className="-skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10"
          onClick={() => setCurrentQuestion(questionData.previousQuestion)}
        >
          Previous
        </button>
        <button
          className={`-skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10 ${
            questionData.nextQuestion != null ? "block" : "hidden"
          }`}
          onClick={() => {
            nextQuestion();
          }}
        >
          Next
        </button>
        <button
          className={`-skew-x-6 bg-devfest-blue text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10 ${
            questionData.nextQuestion === null ? "block" : "hidden"
          }`}
          onClick={() => {
            let inputValidation = validatetextInput(
              value,
              questionData.name,
              questionData.inputType
            );
            if (inputValidation.valid) {
              updateFormData(questionData.name, value);
              submitForm();
              setSubmited(true);
            } else {
              setError(inputValidation.errorMesage);
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LongQuest;
