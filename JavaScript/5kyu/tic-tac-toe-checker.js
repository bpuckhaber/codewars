const isSolved = (board) => {
  const x = 1;
  const o = 2;

  // If X wins then return 1
  if(isWinner(board, x)) {
    return x;
  }

  // If O wins then return 2
  if(isWinner(board, o)) {
    return o;
  }

  // If find any empty spaces then return -1
  const flatBoard = board.reduce((result, val) => result.concat(val), []);
  if (flatBoard.find((val) => val === 0) != null) {
    return -1;
  }

  // scratch
  return 0;
};

const isWinner = (board, player) => (
  // row 1
  (board[0][0] === player && board[0][1] === player && board[0][2] === player) ||
  // row 2
  (board[1][0] === player && board[1][1] === player && board[1][2] === player) ||
  // row 3
  (board[2][0] === player && board[2][1] === player && board[2][2] === player) ||

  // column 1
  (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
  // column 2
  (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
  // column 3
  (board[0][2] === player && board[1][2] === player && board[2][2] === player) ||

  // diagonal top left to bottom right
  (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||

  // diagonal bottom left to top right
  (board[0][2] === player && board[1][1] === player && board[2][0] === player)
);

module.exports = isSolved;
