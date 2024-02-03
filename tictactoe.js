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
}
console.log(gameBoard())

const getBoard = () => board;



function Cell(){
    let value = 0;
}

function gameState(){

}

function checkForWin(board) {
    
}

function checkForDraw(board) {
    
}