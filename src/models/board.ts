import type { Color, Grid } from '../types';
import { DIMENSION } from '../utils/constants';
import { Bishop } from './pieces/bishop';
import { King } from './pieces/king';
import { Knight } from './pieces/knight';
import { Pawn } from './pieces/pawn';
import { Queen } from './pieces/queen';
import { Rook } from './pieces/rook';

export class Board {
  grid: Grid = [];

  constructor() {
    this.initBoard();
  }

  initBoard() {
    this.grid = Array.from({ length: DIMENSION }, () => Array(DIMENSION).fill(null));

    this.grid[0] = this.backRow('black');
    this.grid[1] = Array(DIMENSION).fill(new Pawn('black'));

    this.grid[6] = Array(DIMENSION).fill(new Pawn('white'));
    this.grid[7] = this.backRow('white');
  }

  printBoard() {
    this.grid.forEach((row, i) => {
      const rowStr = row.map((p) => (p ? p.symbol : '.')).join(' ');
      console.log(DIMENSION - i, rowStr);
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
