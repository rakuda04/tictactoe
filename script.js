import Board from "./classes/board.js";

const board = new Board(["x", "o", "x", "x", "o", "o", "o", "o", "x"]);
board.printFormattedBoard();
console.log(board.isEmpty());
console.log(board.isFull());
console.log(board.isTerminal());