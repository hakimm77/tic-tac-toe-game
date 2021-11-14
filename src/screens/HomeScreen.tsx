import React, { useEffect } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Spacer from "../components/reusables/Spacer";
import switchRoutes from "../helpers/switchRoutes";

const HomeScreen: React.FC = () => {
  useEffect(() => {
    document.title = "Home | Tic Tac Toe";
  }, []);

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
      <Spacer height={8} />

      <Box
        display="flex"
        flexDirection="row"
        width="50%"
        alignItems="center"
        justifyContent="space-around"
      >
        <Box display="flex" flexDirection="column">
          <Button
            onClick={() => {
              switchRoutes("/create");
            }}
          >
            <Text>Create game</Text>
          </Button>
          <Spacer height={0.2} />

          <Button
            onClick={() => {
              switchRoutes("/join");
            }}
          >
            <Text>Join game</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
