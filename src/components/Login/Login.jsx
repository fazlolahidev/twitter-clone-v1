import React from "react";

//* Style *//
import style from "./Login.module.css";

//* Firebaes Authentication *//
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";

//* Material UI *//
import { Button } from "@mui/material";

//* Images *//
import twitterImage from "../../images/tiwtter image.png";
import twitterVideo from "../../videos/twitter-video.mp4";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <video className={style.video} autoPlay loop muted>
        <source src={twitterVideo} type="video/mp4" />
      </video>

      <div className={style.login}>
        <div className={style.login__card}>
          <img
            src={twitterImage}
            alt="Twitter Image"
            className={style.login__image}
          />
          <Button variant="outlined" color="error" onClick={signIn}>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
