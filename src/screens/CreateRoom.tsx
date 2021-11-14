import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Spacer from "../components/reusables/Spacer";
import switchRoutes from "../helpers/switchRoutes";
import { createGame, deleteGame } from "../firebase/firebase";
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
import { firebaseConfig } from "../firebase/config";

const CreateRoom: React.FC = () => {
  const [gameID, setGameID] = useState<string>(
    "id" + Math.random().toString(16).slice(2)
  );
  const [create, setCreate] = useState(true);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const checkGame = async () => {
    const querySnapshot = await getDocs(collection(db, `/games`));

    querySnapshot.forEach((childSnapchot) => {
      if (childSnapchot.data().id === gameID) {
        let status = childSnapchot.data().gameBegan;

        if (status === true) {
          switchRoutes(`/${gameID}`);
        }
      }
    });
  };

  useEffect(() => {
    document.title = "Create Game | Tic Tac Toe";

    setInterval(() => {
      checkGame();
    }, 1000);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={1} />

      {create ? (
        <Button
          onClick={() => {
            localStorage.setItem("playerNum", "first");
            createGame(gameID);
            setCreate(false);
          }}
        >
          Create game code
        </Button>
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color="#fafafa"
            fontSize={18}
            border="1px solid #fafafa"
            padding={2}
            borderRadius={10}
          >
            {gameID}
          </Text>

          <Button
            onClick={() => {
              navigator.clipboard.writeText(gameID);
              alert("Code succefully copied!");
            }}
          >
            Copy code
          </Button>
        </Box>
      )}
      <Spacer height={2} />

      <Text color="#fafafa" fontSize={30} fontWeight="bold">
        Send game code to your friend
      </Text>
      <Spacer height={0.5} />

      <Button
        onClick={async () => {
          await deleteGame(gameID);
          switchRoutes("/home");
        }}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default CreateRoom;
