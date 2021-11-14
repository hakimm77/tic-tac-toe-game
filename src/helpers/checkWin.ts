import switchRoutes from "./switchRoutes";

interface cellObject {
  index: number;
  slot: string;
}

type ArrayOfObjects = Array<cellObject>;

const checkWin = (board: ArrayOfObjects, turn: string | null) => {
  for (let i = 0; i < board.length; i++) {
    //horizantle check
    if (i === 0 || i === 3 || i === 6) {
      if (board[i].slot !== "empty") {
        if (
          board[i].slot === board[i + 1].slot &&
          board[i + 1].slot === board[i + 2].slot
        ) {
          console.log(`game has won by ${board[i].slot}`);
          switchRoutes(
            board[i].slot === "X" && turn === "first" ? "/winner" : "/loser"
          );
        }
      }
    }

    //vertical check
    if (i === 0 || i === 1 || i === 2) {
      if (board[i].slot !== "empty") {
        if (
          board[i].slot === board[i + 3].slot &&
          board[i + 3].slot === board[i + 6].slot
        ) {
          console.log(`game has won by ${board[i].slot}`);
          switchRoutes(
            board[i].slot === "X" && turn === "first" ? "/winner" : "/loser"
          );
        }
      }
    }

    //diagnole check
    if (i === 0) {
      if (board[i].slot !== "empty") {
        if (
          board[i].slot === board[i + 4].slot &&
          board[i + 4].slot === board[i + 8].slot
        ) {
          console.log(`game has won by ${board[i].slot}`);
          switchRoutes(
            board[i].slot === "X" && turn === "first" ? "/winner" : "/loser"
          );
        }
      }
    }

    if (i === 2) {
      if (board[i].slot !== "empty") {
        if (
          board[i].slot === board[i + 2].slot &&
          board[i + 2].slot === board[i + 4].slot
        ) {
          console.log(`game has won by ${board[i].slot}`);
          switchRoutes(
            board[i].slot === "X" && turn === "first" ? "/winner" : "/loser"
          );
        }
      }
    }
  }

  let arr = board.filter((e) => e.slot !== "empty");

  if (arr.length === 9) {
    switchRoutes("/tie");
  }
};

export default checkWin;
