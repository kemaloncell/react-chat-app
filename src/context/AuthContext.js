import {createContext, useEffect, useState} from "react"
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => { // I am going to pass here children it  represents our components
     const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        // if you listen any real time operation you should use cleanup function otherwise it is going to cause memory leaking
        // I am going to check whether we have a user or not
      const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
        });

        return () => {
            unsub();
        }
    }, []);

    return(
        <AuthContext.Provider value={{currentUser}}>
            { children }
        </AuthContext.Provider>

    )
};

