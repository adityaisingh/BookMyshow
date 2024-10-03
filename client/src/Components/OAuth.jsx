import React, { useState } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../Firebase/FirebaseConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await axios.post("http://localhost:5000/api/v1/auth/google", {
        email: resultsFromGoogle.user.email, 
        name: resultsFromGoogle.user.displayName,
        googlePhotoUrl: resultsFromGoogle.user.photoURL,
      });
      if (res.status === 200) {
        setUser(res.data);

        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("isLoggedIn", true);

        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button type="button" onClick={handleGoogleClick}>
      <AiFillGoogleCircle className="w-6 h-6 mr-2 text-black" />
      Continue with Google
    </button>
  );
};

export default OAuth;
