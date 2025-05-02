import type { Color, Grid, MoveFromPosition, MoveToPosition } from '../../types';
import { Piece } from './piece';

export class Pawn extends Piece {
  constructor(color: Color) {
    super(color, 'P');
  }

  canMove([fx, fy]: MoveFromPosition, [tx, ty]: MoveToPosition, board: Grid) {
    const direction = this.color === 'white' ? -1 : 1;
    const startRow = this.color === 'white' ? 6 : 1;

    if (fy === ty && !board[tx][ty]) {
      if (tx === fx + direction) return true;
      if (fx === startRow && tx === fx + 2 * direction && !board[fx + direction][fy]) return true;
    }

    if (
      Math.abs(ty - fy) === 1 &&
      tx === fx + direction &&
      board[tx][ty] &&
      board[tx][ty]?.color !== this.color
    ) {
      return true;
    }

    return false;
  }
}
