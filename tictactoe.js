function gameBoard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i].push(Cell());
          
        }
    }
    /* define each cell with a number and let the user input
     a number from 1-9 as to act as an input */
     return board
     
}

function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        let rowValues = [];
        for (let j = 0; j < board[i].length; j++) {
            rowValues.push(board[i][j].value);
        }
        console.log(rowValues);
    }
}

printBoard(gameBoard());

// const getBoard = () => board;



function Cell() {
    return {
        value: null  // value of the cell ('X', 'O', or null)
    };
}
    
    

function gameState(){


    while (!checkForWin(board) && !checkForDraw(board)) {
        userInput();
        changePlayer();
      }
}

function changePlayer(){

}

function userInput(){

}

//winning conditions
function checkForWin(board) {
    
}

function checkForDraw(board) {
    
}

let PlayerX = {
    // insert vars
}

let PlayerO = {
    // insert vars
}
/* goal: https://practical.li/clojure/games/tictactoe-cli/ */
