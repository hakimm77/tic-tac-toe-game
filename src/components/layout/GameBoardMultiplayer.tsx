import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { updateBoard, changeTurns } from "../../firebase/firebase";
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
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase/config";
import Spacer from "../reusables/Spacer";
import checkWin from "../../helpers/checkWin";

interface cellObject {
  index: number;
  slot: string;
}

type ArrayOfObjects = Array<cellObject>;

const GameBoardMultiplayer = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [gameID, setGameID] = useState<string>(
    window.location.pathname.replace("/", "")
  );
  const [turn, setTurn] = useState<string | null>(
    localStorage.getItem("playerNum")
  );
  const [playerTurn, setPlayerTurn] = useState<string>("first");
  const [cells, setCells] = useState<ArrayOfObjects>([
    { index: 0, slot: "empty" },
    { index: 1, slot: "empty" },
    { index: 2, slot: "empty" },
    { index: 3, slot: "empty" },
    { index: 4, slot: "empty" },
    { index: 5, slot: "empty" },
    { index: 6, slot: "empty" },
    { index: 7, slot: "empty" },
    { index: 8, slot: "empty" },
  ]);

  const setNewBoard = async () => {
    const querySnapshot = await getDocs(collection(db, `/games`));

    querySnapshot.forEach((childSnapchot) => {
      if (childSnapchot.data().id === gameID) {
        if (childSnapchot.data().board) {
          setCells(childSnapchot.data().board);
        }
      }
    });
  };

  const updateTurns = async () => {
    const querySnapshot = await getDocs(collection(db, `/games`));

    querySnapshot.forEach((childSnapchot) => {
      if (childSnapchot.data().id === gameID) {
        if (childSnapchot.data().turn) {
          setPlayerTurn(childSnapchot.data().turn);
        }
      }
    });
  };

  useEffect(() => {
    console.log(turn);

    setInterval(() => {
      setNewBoard();
      updateTurns();
      checkWin(cells, turn);
    }, 500);
  }, []);

  const play = (cell: cellObject) => {
    let newCells: ArrayOfObjects = [...cells];

    if (cell.slot === "empty") {
      if (turn === playerTurn) {
        if (playerTurn === "first") {
          newCells[cell.index] = { index: cell.index, slot: "X" };
          changeTurns("second", gameID);

          //
        } else if (playerTurn === "second") {
          newCells[cell.index] = { index: cell.index, slot: "O" };
          changeTurns("first", gameID);

          //
        }
      }
    }

    updateBoard(gameID, newCells);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="row" flexWrap="wrap" width={450}>
        {cells.map((cell) => {
          return (
            <Box
              key={cell.index}
              display="flex"
              border="3px solid #fafafa"
              width={150}
              height={150}
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => {
                play(cell);
              }}
            >
              {cell.slot !== "empty" ? (
                <Text color="#fafafa" fontSize={55} fontWeight="bold">
                  {cell.slot}
                </Text>
              ) : null}
            </Box>
          );
        })}
      </Box>
      <Spacer height={0.5} />

      {turn === playerTurn ? (
        <Text color="#fafafa" fontSize={25} fontWeight="bold">
          Your turn to play
        </Text>
      ) : (
        <Text color="#fafafa" fontSize={25} fontWeight="bold">
          Opponent turn to play
        </Text>
      )}
    </Box>
  );
};

export default GameBoardMultiplayer;
