import React, { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Spacer from "../components/reusables/Spacer";
import switchRoutes from "../helpers/switchRoutes";
import { createGame } from "../firebase/firebase";

const WaitingPlayersSreen: React.FC = () => {
  const [gameID, setGameID] = useState<string>(
    "id" + Math.random().toString(16).slice(2)
  );

  useEffect(() => {
    createGame(gameID);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={1} />

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
          {`http://localhost:3000/${gameID ? gameID : "..."}`}
        </Text>

        <Button
          onClick={() => {
            navigator.clipboard.writeText(
              `http://localhost:3000/${gameID ? gameID : "..."}`
            );
            alert("Link succefully copied!");
          }}
        >
          Copy link
        </Button>
      </Box>
      <Spacer height={2} />

      <Text color="#fafafa" fontSize={30} fontWeight="bold">
        Waiting for a player to join...
      </Text>
      <Spacer height={0.5} />

      <Button
        onClick={() => {
          switchRoutes("/home");
        }}
      >
        Leave
      </Button>
    </Box>
  );
};

export default WaitingPlayersSreen;
