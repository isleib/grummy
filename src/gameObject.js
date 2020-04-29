import { useEffect, useState } from "react";
import firebase from "./firebase";

export const useGameObject = () => {
  let [gameId, setGameId] = useState("0");

  useEffect(() => {
    firebase
      .firestore()
      .collection("games")
      .onSnapshot(snapshot => {
        // const currentGame = Math.max(...snapshot.docs.map(doc => parseInt(doc.id)));
        console.log("docs", snapshot.docs);
        const currentGame = snapshot.docs
          .map(doc => doc.id)
          .sort()
          .reverse()[0];
        setGameId(currentGame);
      });
  }, [gameId]);

  return gameId;
};
