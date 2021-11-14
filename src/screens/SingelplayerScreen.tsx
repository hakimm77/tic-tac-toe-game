import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import GameBoardSingelplayer from "../components/layout/GameBoardSingelplayer";
import Spacer from "../components/reusables/Spacer";

const SingelplayerScreen: React.FC = () => {
  useEffect(() => {
    document.title = "Single Player | Tic Tac Toe";
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={1} />

      <GameBoardSingelplayer />
    </Box>
  );
};

export default SingelplayerScreen;
