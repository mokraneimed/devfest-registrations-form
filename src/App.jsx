import React from "react";
import HackathonForm from "./components/HackathonForm/HackathonForm";
import { ContextProvider } from "./utils/AppContext";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "./firebase/firebase-config.js";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import ThankYouPage from "./components/thankYouPage/ThankYouPage";
import { db } from "./firebase/firebase-config.js";
import { collection, query, where, doc, getDocs } from "firebase/firestore";
import RegistrationsClosed from "./components/registrationsClosed/RegistrationsClosed";

function App() {
  const [user, setUser] = useState(null);
  const [isSubmmited, setSubmited] = useState(false);
  const [registrationsClosed, closeRegistrations] = useState(false);
  const check = async (email) => {
    const q = query(
      collection(db, "Hackathon participants"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      setSubmited(true);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        check(user.email);
      }
    });
  }, []);

  if (registrationsClosed)
    return (
      <>
        <Header /> <RegistrationsClosed /> <Footer />
      </>
    );

  return (
    <ContextProvider>
      <Header />

      {!user ? (
        <LoginPage />
      ) : !isSubmmited ? (
        <HackathonForm
          userEmail={user.email}
          setUser={setUser}
          setSubmited={setSubmited}
        />
      ) : (
        <ThankYouPage setUser={setUser} setSubmited={setSubmited} />
      )}
      <Footer />
    </ContextProvider>
  );
}

export default App;
