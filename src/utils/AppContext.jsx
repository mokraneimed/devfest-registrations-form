import { useState, createContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [formData, setformData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    profession: null,
    university: null,
    otherUniversity: "",
    studyField: "",
    professionalJob: "",
    otherProfession: "",
    excitement: 0,
    haveTeam: null,
    teamName: "",
    numberMembers: null,
    teamMembers: "",
    teamDescription: "",
    expIOT: null,
    participatedInHack: null,
    hackExperience: "",
    isIotHack: null,
    expHackIOT: "",
    additionalThings: "",
    motivation: "",
    skills: "",
    portfolios: "",
  });

  const updateFormData = (field, value) => {
    let newData = formData;
    newData[field] = value;
    setformData(newData);
  };

  return (
    <AppContext.Provider value={{ formData, updateFormData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
