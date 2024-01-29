const board = document.getElementById("board");
const message = document.getElementById("message");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""]; // Represents the 3x3 game board

// Function to create the Tic-Tac-Toe board dynamically
function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.setAttribute("data-index", i);
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
  }
}

// Function to handle cell clicks
function handleCellClick(event) {
  const clickedCell = event.target;
  const cellIndex = clickedCell.getAttribute("data-index");

  if (gameBoard[cellIndex] === "" && !isGameOver()) {
    gameBoard[cellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    if (isWinner()) {
      message.textContent = `Player ${currentPlayer} wins!`;
    } else if (isBoardFull()) {
      message.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      message.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

// Function to check for a winner
function isWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }

  return false;
}

// Function to check if the board is full (a draw)
function isBoardFull() {
  return !gameBoard.includes("");
}

// Function to check if the game is over (either a winner or a draw)
function isGameOver() {
  return isWinner() || isBoardFull();
}

// Function to restart the game
function restartGame() {
    // Clear the game board
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    
    // Remove X and O from the board display
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
      cell.textContent = "";
    });
  
    // Reset the message
    message.textContent = "Player X's turn";
    
    // Reset the current player to X
    currentPlayer = "X";
  }
  
// Initialize the game
createBoard();
