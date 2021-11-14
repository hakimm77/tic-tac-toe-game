import React, { useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Spacer from "../components/reusables/Spacer";
import switchRoutes from "../helpers/switchRoutes";

const LoserScreen: React.FC = () => {
  useEffect(() => {
    document.title = "Loser Player | Tic Tac Toe";
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Spacer height={1} />

      <Text color="#fafafa" fontSize={25} fontWeight="bold">
        You lost
      </Text>
      <Spacer height={1} />

      <Button
        onClick={() => {
          switchRoutes("/home");
        }}
      >
        Go home
      </Button>
    </Box>
  );
};

export default LoserScreen;
