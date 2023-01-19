import React, { useState } from "react";

//* Style *//
import style from "./TweetBox.module.css";

//* Icons *//
import { Avatar, Button } from "@mui/material";

//* Firebase *//
import { serverTimestamp } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

//* Firebase Hooks *//
import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';


const TweetBox = () => {
  const [user, loading, error] = useAuthState(auth);
  const [tweet, setTweet] = useState("");

  const addTweet = (e) => {
    e.preventDefault();

    if (!tweet) return;

    addDoc(collection(db, "posts"), {
      displayName: user?.displayName,
      avatar: user?.photoURL,
      text: tweet,
      verified: true,
      username: user?.email.split('@')[0],
      timestamp: serverTimestamp(),
    });

    setTweet("");
  };


  return (
    <div className={style.tweetBox}>
      <form onSubmit={addTweet}>
        <div className={style.tweetBox__input}>
          <Avatar />
          <input
            value={tweet}
            type="text"
            placeholder="write tweet here :)"
            onChange={(e) => setTweet(e.target.value)}
          />
        </div>
        <Button type="submit" className={style.tweetBox__tweetButton}>
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
