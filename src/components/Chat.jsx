import React from "react";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
    return(
        <div className="chat">
            <div className="chatInfo">
               <span>Kemal</span>
                <div className="chatIcons">
                    <img src={require('../img/cam.png')} alt=""/>
                    <img src={require('../img/add.png')} alt=""/>
                    <img src={require('../img/more.png')} alt=""/>
                </div>
            </div>
            <Messages />
            <Input/>
        </div>
    )
}

export default Chat
