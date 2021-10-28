import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Spacer from "../components/reusables/Spacer";
import switchRoutes from "../helpers/switchRoutes";

const HomeScreen: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <Spacer height={5} />

      <Text color="white" fontSize={60} fontWeight="bold">
        Tic Tac Toe
      </Text>
      <Spacer height={10} />

      <Box
        display="flex"
        flexDirection="row"
        width="40%"
        alignItems="center"
        justifyContent="space-around"
      >
        <Button
          onClick={() => {
            switchRoutes("/singelplayer");
          }}
        >
          <Text>Singelplayer</Text>
        </Button>

        <Button
          onClick={() => {
            switchRoutes("/waiting");
          }}
        >
          <Text>Multiplayer</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default HomeScreen;
