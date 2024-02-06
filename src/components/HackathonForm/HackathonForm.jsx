import React from "react";
import { useState } from "react";
import { HackathonQuestions } from "../../data/hackathonQuestions";
import ShortQuest from "../questionType1/ShortQuest";
import LongQuest from "../questionType2/LongQuest";
import MultOptqst from "../questionType3/multi options question";
import StarRating from "../questionType4/starRating";
import { useEffect } from "react";
import { useContext } from "react";
import AppContext from "../../utils/AppContext";
import yellowLine from "../../assets/shapes/yellowLine.png";
import ConfirmInfos from "../confirmInfos/ConfirmInfos";
import CheckBoxQuestion from "../questionType5/CheckBoxQuestion";

const HackathonForm = ({ userEmail, setUser, setSubmited }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { updateFormData } = useContext(AppContext);
  useEffect(() => {
    updateFormData("email", userEmail);
    const formPosition = document.getElementById("form").offsetTop;
    window.scroll(0, formPosition-20);
  });
  const displayQuestion = (questionID) => {
    let questionData = HackathonQuestions[questionID];
    switch (questionData.type) {
      case "shortQuestion":
        return (
          <ShortQuest
            questionData={questionData}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            display={questionData.id + 1}
          />
        );
      case "longQuestion":
        return (
          <LongQuest
            questionData={questionData}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setSubmited={setSubmited}
          />
        );
      case "optionsQuestion":
        return (
          <MultOptqst
            questionData={questionData}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            display={questionData.id + 1}
          />
        );
      case "ratingQuestion":
        return (
          <StarRating
            questionData={questionData}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        );
      case "checkBoxQuestion":
        return (
          <CheckBoxQuestion
            questionData={questionData}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            display={questionData.id + 1}
          />
        );
      case "Confirmation":
        return (
          <ConfirmInfos
            questionData={questionData}
            setCurrentQuestion={setCurrentQuestion}
            setSubmited={setSubmited}
          />
        );
    }
  };
  return (
    <div id="form">
      <div className="w-fit mx-auto md:flex pt-5 ">
        You are logged in as:
        <span className="underline text-devfest-orange px-2">{userEmail}</span>
        <div className="w-32 mx-auto">
          <button
            onClick={() => setUser(null)}
            className="hover:text-devfest-orange"
          >
            Change Account
          </button>
          <div>
            <img src={yellowLine} />
          </div>
        </div>
      </div>
      <div className="h-screen justify-items-center px-3">
        {displayQuestion(currentQuestion)}
      </div>
    </div>
  );
};

export default HackathonForm;
