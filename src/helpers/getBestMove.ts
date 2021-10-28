interface cellObject {
  index: number;
  slot: string;
}

type ArrayOfObjects = Array<cellObject>;

const getBestMove = (cells: ArrayOfObjects, emptyCells: ArrayOfObjects) => {
  console.log("this is the best move");
};

export default getBestMove;
