import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameBoardMultiplayer from "../components/layout/GameBoardMultiplayer";
import Spacer from "../components/reusables/Spacer";
import { deleteGame } from "../firebase/firebase";
import switchRoutes from "../helpers/switchRoutes";

const GameScreen: React.FC = () => {
  const [gameID, setGameID] = useState<string>(
    window.location.pathname.replace("/", "")
  );

  useEffect(() => {
    document.title = "Game Screen | Tic Tac Toe";
  }, []);

  const leaveGame = async () => {
    await deleteGame(gameID);
    localStorage.setItem("playerNum", "null");
    switchRoutes("/home");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={1} />

      <GameBoardMultiplayer />
      <Spacer height={0.7} />

      <Button onClick={leaveGame}>Leave game</Button>
    </Box>
  );
};

export default GameScreen;
