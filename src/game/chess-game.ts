import { Board } from '../models/board';
import type { Color } from '../types';
import { parseInput } from '../utils/input-parser';

export class ChessGame {
  board = new Board();
  currentTurn: Color = 'white';

  playMove(input: string) {
    const parsed = parseInput(input);
    if (!parsed) {
      console.log('Invalid input. Use format like "e2 e4".');
      return;
    }

    const [[fx, fy], [tx, ty]] = parsed;
    const piece = this.board.grid[fx][fy];

    if (!piece || piece.color !== this.currentTurn) {
      console.log(`It's ${this.currentTurn}'s turn.`);
      return;
    }

    if (!piece.canMove([fx, fy], [tx, ty], this.board.grid)) {
      console.log('Invalid move.');
      return;
    }

    if (this.board.grid[tx][ty]?.symbol === 'K') {
      console.log(`${this.currentTurn} wins!`);
      process.exit(0);
    }

    this.board.grid[tx][ty] = piece;
    this.board.grid[fx][fy] = null;
    this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white';
  }
}
