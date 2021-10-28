import React from "react";
import { Box } from "@chakra-ui/react";
import GameBoardMultiplayer from "../components/layout/GameBoardMultiplayer";
import Spacer from "../components/reusables/Spacer";

const MultiplayerScreen: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={1} />

      <GameBoardMultiplayer />
    </Box>
  );
};

export default MultiplayerScreen;
