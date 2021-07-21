import React, { useEffect, useReducer } from "react";
import './App.css';
import {ToastContainer} from 'react-toastify'
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from "./auth/authReducer";
import {AppRouter} from "./routes/AppRouter";

const init = ()=>{
  return JSON.parse(localStorage.getItem('user')) || { logged:false}
}

export const App=()=> {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {

    localStorage.setItem('user',JSON.stringify(user))
    //localStorage.setItem('user',JSON.stringify(user))
    
  }, [user])

  return (
    <div className="App">
      <AuthContext.Provider value={{user,dispatch}} >

          <AppRouter />

      </AuthContext.Provider>
      <ToastContainer />
    </div>
  );
}

