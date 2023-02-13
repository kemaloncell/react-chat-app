import React from "react";

const Navbar = () => {
    return(
        <div className="navbar">
            <span className="logo">Chat app</span>
            <div className="user">
                <img src={require('../img/man2.jpg')}  alt=""/>
                <span className="">Jhon</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar
