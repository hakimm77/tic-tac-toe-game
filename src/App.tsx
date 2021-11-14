import React, { useEffect, useState } from "react";
import "./style.css";
import HomeScreen from "./screens/HomeScreen";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SingelplayerScreen from "./screens/SingelplayerScreen";
import WaitingPlayersSreen from "./screens/CreateRoom";
import { checkGame } from "./firebase/firebase";
import CreateRoom from "./screens/CreateRoom";
import JoinRoom from "./screens/JoinRoom";
import GameScreen from "./screens/GameScreen";
import LoserScreen from "./screens/LoserScreen";
import WinnerScreen from "./screens/WinnerScreen";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#000",
      },
    },
  },
});

interface routeComponentProps {
  path: string;
  component: React.FC;
}

const RouteComponent: React.FC<routeComponentProps> = ({ path, component }) => {
  return <Route path={path} component={component} />;
};

const App = () => {
  const [gameState, setGameState] = useState<boolean>(false);
  const [gameID, setGameID] = useState<string>("");

  useEffect(() => {
    checkGame(window.location.pathname.replace("/", ""), setGameState);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {gameState && (
          <RouteComponent path={`/${gameID}`} component={GameScreen} />
        )}

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <RouteComponent path="/home" component={HomeScreen} />
        <RouteComponent path="/create" component={CreateRoom} />
        <RouteComponent path="/join" component={JoinRoom} />
        <RouteComponent path="/waiting" component={WaitingPlayersSreen} />
        <RouteComponent path="/loser" component={LoserScreen} />
        <RouteComponent path="/winner" component={WinnerScreen} />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
