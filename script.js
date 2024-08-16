import Board from "./classes/board.js";
import Player from "./classes/player.js";

const board = new Board(["x", "o", "", "", "", "", "o", "", "x"]);
board.printFormattedBoard();
const p = new Player();
console.log(p.getBestMove(board));
console.log(p.nodesMap);