import React from "react";
import { useContext } from "react";
import AppContext from "../../utils/AppContext";
import { db } from "../../firebase/firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

const ConfirmInfos = ({ questionData, setCurrentQuestion, setSubmited }) => {
  const { formData } = useContext(AppContext);
  const hackathonCollection = collection(db, "Hackathon participants");

  const submitForm = async () => {
    // Write Your Code Here
    await addDoc(hackathonCollection, formData);
  };

  return (
    <div className="flex  items-center flex-col px-2  md:p-10 lg:p-10 h-screen">
      <div className="h-12 md:h-16 w-full"></div>
      <h1 className="questionTitle text-white text-md md:text-2xl lg:text-[30px] lg:max-w-[70%] p-4 h-28 text-center ">
        {questionData.Question}
        <p className="mt-3 text-xs text-devfest-orange">
          {questionData.description}
        </p>
      </h1>

      <div className=" p-5 lg:w-5/6 md:w-full break-all flex flex-wrap md:px-10 px-2     mx-auto  h-64 mt-2 md:mt-8 lg:mt-16 overflow-y-auto">
        <div className="flex gap-4 mx-5 my-2 w-fit">
          <span className="whitespace-nowrap text-devfest-orange ">
            Full Name:
          </span>
          <span className="underline break-words">{formData.fullName}</span>
        </div>
        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Phone number:
          </span>
          <span className="underline break-words">{formData.phoneNumber}</span>
        </div>
        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">Email:</span>
          <span className="underline break-words">{formData.email}</span>
        </div>
        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Profession:
          </span>
          <span className="underline break-words">{formData.profession}</span>
        </div>
        {formData.profession === "Student" && (
          <>
            {formData.university != "Other" && (
              <div className="flex gap-4 mx-5 my-2 w-fit ">
                <span className="whitespace-nowrap text-devfest-orange ">
                  University:
                </span>
                <span className="underline break-words">{formData.university}</span>
              </div>
            )}

            {formData.university === "Other" && (
              <div className="flex gap-4 mx-5 my-2 w-fit ">
                <span className="whitespace-nowrap text-devfest-orange ">
                  University:
                </span>
                <span className="underline break-words">{formData.otherUniversity}</span>
              </div>
            )}
            <div className="flex gap-4 mx-5 my-2 w-fit ">
              <span className="whitespace-nowrap text-devfest-orange ">
                Study Field:
              </span>
              <span className="underline break-words">{formData.studyField}</span>
            </div>
          </>
        )}
        {formData.profession === "professional" && (
          <>
            <div className="flex gap-4 mx-5 my-2 w-fit ">
              <span className="whitespace-nowrap text-devfest-orange ">
                Professional Job:
              </span>
              <span className="underline break-words">{formData.professionalJob}</span>
            </div>
          </>
        )}
        {formData.profession === "Other" && (
          <>
            <div className="flex gap-4 mx-5 my-2 w-fit ">
              <span className="whitespace-nowrap text-devfest-orange ">
                Profession:
              </span>
              <span className="underline break-words">{formData.otherProfession}</span>
            </div>
          </>
        )}
        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Excitement:
          </span>
          <span className="underline break-words">{formData.excitement}</span>
        </div>
        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Motivation:
          </span>
          <span className="underline break-words">{formData.motivation}</span>
        </div>

        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Have a Team:
          </span>
          <span className="underline break-words">{formData.haveTeam}</span>
        </div>
        {formData.haveTeam === "Yes" && (
          <>
            <div className="flex gap-4 mx-5 my-2 w-fit ">
              <span className="whitespace-nowrap text-devfest-orange ">
                Team name:
              </span>
              <span className="underline break-words">{formData.teamName}</span>
            </div>
            <div className="flex gap-4 mx-5 my-2 w-fit ">
              <span className="whitespace-nowrap text-devfest-orange ">
                Members number:
              </span>
              <span className="underline break-words">{formData.numberMembers}</span>
            </div>
            <div className="flex gap-4 mx-5 my-2 w-fit ">
              <span className="whitespace-nowrap text-devfest-orange ">
                Team Members:
              </span>
              <span className="underline break-words">{formData.teamMembers}</span>
            </div>
            <div className="flex gap-4 mx-5 my-2 w-fit ">
              <span className="whitespace-nowrap text-devfest-orange ">
                Team Slogan:
              </span>
              <span className="underline break-words">{formData.teamDescription}</span>
            </div>
          </>
        )}
        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Skills:
          </span>
          <span className="underline break-words">{formData.skills.toString()}</span>
        </div>
        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Portfolios:
          </span>
          <span className="underline break-words">{formData.portfolios}</span>
        </div>
        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Participated in Hackathon:
          </span>
          <span className="underline break-words">{formData.participatedInHack}</span>
        </div>
        {formData.participatedInHack === "Yes" && (
          <div className="flex gap-4 mx-5 my-2 w-fit ">
            <span className="whitespace-nowrap text-devfest-orange ">
              Hackahton Experience:
            </span>
            <span className="underline break-words">{formData.hackExperience}</span>
          </div>
        )}

        <div className="flex gap-4 mx-5 my-2 w-fit ">
          <span className="whitespace-nowrap text-devfest-orange ">
            Additional Things:
          </span>
          <span className="underline break-words">{formData.additionalThings}</span>
        </div>
      </div>
      <div className="flex mt-10 pt-5 p-0 lg:p-10 justify-between w-[100%] ">
        <button
          className="-skew-x-6 bg-devfest-orange text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10"
          onClick={() => setCurrentQuestion(questionData.previousQuestion)}
        >
          Edit
        </button>

        <button
          className="-skew-x-6 bg-devfest-blue text-sm  lg:text-md font-[500] text-black py-1 lg:py-2 px-10"
          onClick={() => {
            submitForm();
            setSubmited(true);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ConfirmInfos;
