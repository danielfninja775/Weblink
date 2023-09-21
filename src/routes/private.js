import { useState, useEffect } from "react";
import { Auth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { Navigate } from "react-router-dom";
import { auth } from "../services/firebaseConection";

export default function Private ({ children }){

    const [loading, Setloading] = useState(true)
    const [signed, setSigned] = useState(false);

    useEffect(() => {

        async function checkLogin(){
        const unsub = onAuthStateChanged(auth, (user) => {
      

            if(user){
                const userData ={
                    uid: user.uid,
                    email: user.email

                };

                localStorage.setItem("@detailUser", JSON.stringify(userData))
                Setloading(false);
                setSigned(true)
                
            }else{
                Setloading(false);
                setSigned(false);
            }
        })
    }
      checkLogin();
},[])

    if(loading){
        return(
           <div></div>     
        )
      }

    if(!signed){
    return <Navigate to="/login" />
     }

    return children;
}