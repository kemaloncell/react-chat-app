import React from "react";

const Message = () => {
    return(
        <div className="message owner">
           <div className="messageInfo">
               <img src={require('../img/woman.jpg')} alt=""/>
               <span>Just now</span>
           </div>
           <div className="messageContent">
               <p>hello</p>
               <img src={require('../img/man.jpg')} alt=""/>
           </div>
        </div>
    )
}

export default Message
