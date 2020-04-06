import React from "react";
import firebase from "./firebase";

firebase
  .firestore()
  .collection("times")
  .add({
    title: "whatever",
    seconds: 25
  });

function App() {
  return <div className="App">ok. cool</div>;
}

export default App;
