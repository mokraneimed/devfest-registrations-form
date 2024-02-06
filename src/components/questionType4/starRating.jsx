import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import AppContext from "../../utils/AppContext";
import { useEffect } from "react";
import requiredIcon from "../../assets/shapes/requiredIcon.png";

const StarRating = ({ questionData, setCurrentQuestion, currentQuestion }) => {
  const { formData, updateFormData } = useContext(AppContext);

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setRating(formData[questionData.name]);
  }, [questionData.id]);
  //const element = <FontAwesomeIcon icon={faStar} />

  return (
    <div className="flex  items-center flex-col px-2  md:p-10 lg:p-10 h-screen">
      <div className="h-12 md:h-16 w-full"></div>
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

      <div className=" p-5 w-fit  mx-auto  flex justify-center items-center h-64 mt-2 md:mt-8 lg:mt-16">
        {[...Array(6)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label
              className=" cursor-pointer content-center  text-4xl  "
              key={i}
            >
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />

              <FontAwesomeIcon
                icon={faStar}
                className="star text-shadow-md md:mx-2 "
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#eeeeee"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
      <div className="flex mt-10 pt-5 p-0 lg:p-10 justify-between w-[100%] ">
        <button
          className="-skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10"
          onClick={() => setCurrentQuestion(questionData.previousQuestion)}
        >
          Previous
        </button>
        {rating ? (
          <button
            className="-skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10"
            onClick={() => {
              setCurrentQuestion(questionData.nextQuestion);
              updateFormData(questionData.name, rating);
            }}
          >
            Next
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StarRating;
