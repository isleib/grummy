import React, { useEffect, useState } from "react";

import CardArea from "./cardArea";
import MessageArea from "./messageArea";
import firebase from "./firebase";

import "./main.scss";

function App() {
  return (
    <div className="App">
      { false && <CardArea /> }
      <MessageArea />
    </div>
  );
}

export default App;
