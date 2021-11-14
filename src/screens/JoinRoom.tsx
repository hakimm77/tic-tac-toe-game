import React, { useEffect, useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import Spacer from "../components/reusables/Spacer";
import switchRoutes from "../helpers/switchRoutes";
import { checkGame } from "../firebase/firebase";

const JoinRoom: React.FC = () => {
  const [codeInput, setCodeInput] = useState("");
  const [status, setStatus] = useState("");

  const checkCode = (code: string) => {
    if (code) {
      localStorage.setItem("playerNum", "second");
      checkGame(code, setStatus);
    }
  };

  useEffect(() => {
    document.title = "Join Game | Tic Tac Toe";

    if (status === "found") {
      switchRoutes(`/${codeInput}`);
    }
  }, [status]);

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
        <Input
          color="#fafafa"
          placeholder="Game code..."
          onChange={(e) => {
            setCodeInput(e.target.value);
          }}
          value={codeInput}
        />

        <Button
          onClick={() => {
            checkCode(codeInput);
          }}
        >
          Join
        </Button>
      </Box>
      <Spacer height={2} />

      <Button
        onClick={() => {
          switchRoutes("/home");
        }}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default JoinRoom;
