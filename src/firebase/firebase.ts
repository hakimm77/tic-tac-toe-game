import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";
import { firebaseConfig } from "./config";

interface cellObject {
  index: number;
  slot: string;
}
type ArrayOfObjects = Array<cellObject>;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createGame = async (id: string) => {
  const addingGame = await addDoc(collection(db, `/games`), {
    id: id,
    gameBegan: false,
  });

  const gettingGameKey = await getDocs(collection(db, `/games`));

  gettingGameKey.forEach(async (childSnapchot) => {
    if (childSnapchot.data().id === id) {
      await setDoc(doc(db, `/games/${childSnapchot.id}/players/player1/`), {
        player1: 1,
      });
    }
  });

  return addingGame.id;
};

export const checkGame = async (
  id: string,
  setStatus: Dispatch<SetStateAction<any>>
) => {
  const querySnapshot = await getDocs(collection(db, `/games`));

  querySnapshot.forEach(async (childSnapchot) => {
    if (childSnapchot.data().id === id) {
      console.log("found");
      await updateDoc(doc(db, `/games/${childSnapchot.id}/`), {
        gameBegan: true,
      });

      await setDoc(doc(db, `/games/${childSnapchot.id}/players/player2/`), {
        player2: 2,
      });

      setStatus("found");
    }
  });
};

export const deleteGame = async (id: string) => {
  const querySnapshot = await getDocs(collection(db, `/games`));

  querySnapshot.forEach((childSnapchot) => {
    if (childSnapchot.data().id === id) {
      deleteDoc(doc(db, `/games/${childSnapchot.id}/`));
      console.log(childSnapchot.id);
    }
  });
};

export const updateBoard = async (id: string, board: ArrayOfObjects) => {
  const querySnapshot = await getDocs(collection(db, `/games`));

  querySnapshot.forEach(async (childSnapchot) => {
    if (childSnapchot.data().id === id) {
      await updateDoc(doc(db, `/games/${childSnapchot.id}/`), {
        board: board,
      });
    }
  });
};

export const changeTurns = async (turn: string, id: string) => {
  const querySnapshot = await getDocs(collection(db, `/games`));

  querySnapshot.forEach(async (childSnapchot) => {
    if (childSnapchot.data().id === id) {
      await updateDoc(doc(db, `/games/${childSnapchot.id}/`), {
        turn: turn,
      });
    }
  });
};
