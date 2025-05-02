import readline from 'readline';
import { ChessGame } from './game/chess-game';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = new ChessGame();
game.board.printBoard();

const prompt = () => {
  rl.question(`${game.currentTurn} move (e.g., e2 e4): `, (input) => {
    game.playMove(input);
    game.board.printBoard();
    prompt();
  });
};

prompt();
