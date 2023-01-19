import React from "react";

//* Style *//
import style from "./Post.module.css";

//* Icons *//
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const Post = ({ displayName, verified, timestamp, username, text, avatar }) => {
  return (
    <div className={style.post}>
      <div className={style.post__avatar}>
        <Avatar src={avatar} />
      </div>

      <div className={style.post__body}>
        <div className={style.post__header}>
          <div>
            <h3 className={style.post__headerText}>
              <span>{ displayName }</span>
              <p className={style.post__headerTextContainerUsername} >
                <VerifiedIcon
                  fontSize="s"
                  className={style.post__verfiedIcon}
                />
                <span className={style.post__headerTextUsername} >@{username}</span>
              </p>
            </h3>
          </div>

          <div className={style.post__headerDescription} >
            <p>{text}</p>
          </div>

          <footer className={style.post__footer} >
            <ChatBubbleOutlineIcon fontSize="s" />
            <RepeatIcon fontSize="s" />
            <FavoriteBorderIcon fontSize="s" />
            <BookmarkBorderIcon fontSize="s" />
          </footer>

        </div>
      </div>
    </div>
  );
};

export default Post;
