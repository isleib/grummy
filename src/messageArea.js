import React, { useState } from "react";
import MessagesContent from "./messages/messagesContent";

const MessageArea = props => {
  let [extended, setExtended] = useState(false);

  return (
    <div className={`message-area${extended ? " extended" : ""}`}>
      <div
        className="message-area-button"
        onClick={e => {
          setExtended(!extended);
        }}
      >
        {extended ? "> >" : "< <"}
      </div>
        <MessagesContent />
    </div>
  );
};

export default MessageArea;
