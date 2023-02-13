import React from "react";

const Chats = () => {
    return(
        <div className="chats">
            <div className="userChat">
                <img src={require('../img/man.jpg')} alt=""/>
                <div className="userChatInfo">
                    <span className="">Kemal</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={require('../img/man.jpg')} alt=""/>
                <div className="userChatInfo">
                    <span className="">Kemal</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={require('../img/man.jpg')} alt=""/>
                <div className="userChatInfo">
                    <span className="">Kemal</span>
                    <p>Hello</p>
                </div>
            </div>

        </div>
    )
}

export default Chats
