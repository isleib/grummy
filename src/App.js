import React, { useEffect, useState } from "react";
import firebase from "./firebase";

import "./main.scss";

function createUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  let [username, setUsername] = useState("new user");
  let [localMessage, setLocalMessage] = useState("");
  let [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .onSnapshot(snapshot => {
        const newMessages = snapshot.docs.map(doc => ({
          ...doc.data()
        }));
        console.log("ss", newMessages);
        setMessages(newMessages);
      });
  }, []);

  const catchKey = e => {
    if (e.which === 13 /* Enter */) {
      // e.preventDefault();
      e.target.blur();
      firebase.firestore().collection("messages")
        .doc(createUUID())
        .set({
          user: username,
          message: localMessage
        })
        .then(function() {
          console.log("Document successfully written!");
          setLocalMessage("");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  };

  return (
    <div className="App">
      <div className="message-area">
        <div className="message-output">
          {messages.map(m => (
            <div className="message">{`${m.user}: ${m.message}`}</div>
          ))}
        </div>
        <div className="username-input">
          <input
            type="text"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="message-input">
          <textarea
            type="textarea"
            value={localMessage}
            onKeyPress={catchKey}
            onChange={e => {
              setLocalMessage(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
