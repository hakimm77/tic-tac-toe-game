import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

interface cellObject {
  index: number;
  slot: string;
}

type ArrayOfObjects = Array<cellObject>;

const GameBoardMultiplayer = () => {
  const [playerTurn, setPlayerTurn] = useState<number>(1);
  const [cells, setCells] = useState<ArrayOfObjects>([
    { index: 0, slot: "empty" },
    { index: 1, slot: "empty" },
    { index: 2, slot: "empty" },
    { index: 3, slot: "empty" },
    { index: 4, slot: "empty" },
    { index: 5, slot: "empty" },
    { index: 6, slot: "empty" },
    { index: 7, slot: "empty" },
    { index: 8, slot: "empty" },
  ]);

  const play = (cell: cellObject) => {
    /*let newCells: ArrayOfObjects = [...cells];
    let emptyCells: ArrayOfObjects = [
      ...cells.filter((e) => e.slot === "empty"),
    ];

    if (cell.slot === "empty") {
      switch (playerTurn) {
        case 1:
          newCells[cell.index] = { index: cell.index, slot: "X" };
          setPlayerTurn(2);
          break;
        case 2:
          var item = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          newCells[item.index] = { index: item.index, slot: "O" };
          setPlayerTurn(1);
          break;
      }
    }

    setCells(newCells);*/
    console.log(cell);
  };

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" width={450}>
      {cells.map((cell) => {
        return (
          <Box
            key={cell.index}
            display="flex"
            border="3px solid #fafafa"
            width={150}
            height={150}
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            onClick={() => {
              play(cell);
            }}
          >
            {cell.slot !== "empty" ? (
              <Text color="#fafafa" fontSize={55} fontWeight="bold">
                {cell.slot}
              </Text>
            ) : null}
          </Box>
        );
      })}
    </Box>
  );
};

export default GameBoardMultiplayer;
