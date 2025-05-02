import type { Color, Grid } from '../types/base';
import { King, Queen, Rook, Bishop, Knight, Pawn } from './piece';

export class Board {
  grid: Grid = [];

  constructor() {
    this.initBoard();
  }

  initBoard() {
    this.grid = Array.from({ length: 8 }, () => Array(8).fill(null));

    this.grid[0] = this.backRow('black');
    this.grid[1] = Array(8).fill(new Pawn('black'));

    this.grid[6] = Array(8).fill(new Pawn('white'));
    this.grid[7] = this.backRow('white');
  }

  printBoard() {
    this.grid.forEach((row, i) => {
      const rowStr = row.map((p) => (p ? p.symbol : '.')).join(' ');
      console.log(8 - i, rowStr);
    });
    console.log('  a b c d e f g h');
  }

  private backRow(color: Color) {
    return [
      new Rook(color),
      new Knight(color),
      new Bishop(color),
      new Queen(color),
      new King(color),
      new Bishop(color),
      new Knight(color),
      new Rook(color),
    ];
  }
}
