import React from "react";

//* Style *//
import style from "./Widgets.module.css";

//* Icons *//
import SearchIcon from "@mui/icons-material/Search";

//* Components *// 
import SharePost from "../SharePost/SharePost";

const Widgets = () => {
  return (
    <div className={style.widgets}>
      <div className={style.widgets__input}>
        <SearchIcon className={style.widgets__searchIcon} />
        <input type="text" placeholder="search here ..." />
      </div>

      <div className={style.widgets__widgetsContainer}>
        <h2>What's happening</h2>

       <SharePost />
      </div>
    </div>
  );
};

export default Widgets;
