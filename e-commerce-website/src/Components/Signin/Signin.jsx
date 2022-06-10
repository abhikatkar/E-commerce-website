import "../Signin/Signin.css"


import { auth} from "./Configs";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getValue } from "../Redux/Auth/action";
import { getUser } from "../Redux/Auth/action";
import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";



export function SignIn() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    function signInWithGmail(){
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
         .then((result)=>{
             dispatch(getValue());
             dispatch(getUser(result.user.photoURL));
             alert("Singnin successfully");
             navigate("/");
         })
         .catch((err)=>{
             console.log(err)
         })
    }

   

  return (
      <div>

          <Navbar/>
    <div>
      <img className="auth" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTV29SO-85fu5A-0vOhVKkfDPjMFZFqhOMSw&usqp=CAU" alt="" />
    <div className="signBox">
   
    <button onClick={signInWithGmail} type="button" className="login-with-google-btn" >
  Sign in with Google
</button>

    </div>
    </div>


    <Footer/>
    </div>
  )
}