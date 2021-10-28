import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const createGame = async (id: string) => {
  const querySnapshot = await addDoc(collection(db, `/games`), {
    id: id,
    gameBegan: false,
  });

  console.log(querySnapshot.id);

  return id;
};
