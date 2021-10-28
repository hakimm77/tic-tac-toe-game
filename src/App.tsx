import React from "react";
import "./style.css";
import HomeScreen from "./screens/HomeScreen";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SingelplayerScreen from "./screens/SingelplayerScreen";
import MultiplayerScreen from "./screens/MultiplayerScreen";
import WaitingPlayersSreen from "./screens/WaitingPlayersSreen";

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
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <RouteComponent path="/home" component={HomeScreen} />
        <RouteComponent path="/singelplayer" component={SingelplayerScreen} />
        <RouteComponent path="/multiplayer" component={MultiplayerScreen} />
        <RouteComponent path="/waiting" component={WaitingPlayersSreen} />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
