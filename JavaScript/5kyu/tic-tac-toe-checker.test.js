const isSolved = require('./tic-tac-toe-checker');

describe('#ticTacToeChecker', () => {
  const tests = [
    {
      desc: 'unfinished game',
      board: [[0,0,1],
              [0,1,2],
              [2,1,0]],
      winner: -1,
    },
    {
      desc: 'player 1 wins column 2',
      board: [[2,1,1],
              [2,1,2],
              [1,1,2]],
      winner: 1,
    },
    {
      desc: 'player 2 wins diagonal top left to bottom right',
      board: [[2,1,1],
              [1,2,2],
              [1,1,2]],
      winner: 2,
    },
    {
      desc: 'scratch',
      board: [[2,1,1],
              [1,2,2],
              [1,2,1]],
      winner: 0,
    },
    {
      desc: 'player 2 wins row 3',
      board: [[2,1,1],
              [0,1,1],
              [2,2,2]],
      winner: 2,
    },
  ];

  Object.keys(tests).forEach((key) => {
    const { desc, board, winner } = tests[key];

    it(desc, () => {
      Test.expect(isSolved(board), winner);
    });
  });
});
