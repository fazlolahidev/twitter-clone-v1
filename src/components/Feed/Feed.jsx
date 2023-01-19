import React, { useEffect, useState } from "react";

//* Style *//
import style from "./Feed.module.css";

//* Components *//
import Post from "../Post/Post";
import TweetBox from "./TweetBox";

//* Firestore *//
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

//* Utils *//
import { sortByDate } from "../../utils/sortByDate";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (doc) => {
      const postsData = [];

      doc.forEach((data) => {
        postsData.push({ id: data.id, ...data.data() });
      });

      setPosts(sortByDate(postsData));
    });

    return () => unsub();
  }, []);

  return (
    <div className={style.feed}>
      <header className={style.feed__header}>
        <h2>Home</h2>
      </header>

      {/* Tweet Box */}
      <TweetBox />

      {/* Post */}
      {posts?.map((post) => {
        return (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default Feed;
