import React from "react";

//* Components *//
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Wideget/Widgets";

//* Style *//
import style from "./App.module.css";

//* Firebaes Hooks *//
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  if(loading) return

  return (
    <>
      {user ? (
        <div className={style.app}>
          {/* Sidebar */}
          <Sidebar />

          {/* Feed */}
          <Feed />

          {/* Widgets */}
          <Widgets />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
