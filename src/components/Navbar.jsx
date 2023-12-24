import React from "react";
import { signOut } from "firebase/auth"
import { auth } from "../firebase";

const Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo">Chat app</span>
            <div className="user">
                <img src={require('../img/man2.jpg')}  alt=""/>
                <span className="">Jhon</span>
                <button onClick={ () => signOut(auth) }>logout</button>
            </div>
        </div>
    )
}

export default Navbar
