import type { Color, Grid, MovePosition } from '../../types';
import { Piece } from './piece';

export class Bishop extends Piece {
  constructor(color: Color) {
    super(color, 'B');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition, board: Grid) {
    if (Math.abs(fx - tx) !== Math.abs(fy - ty)) return false;

    const stepX = fx < tx ? 1 : -1;
    const stepY = fy < ty ? 1 : -1;

    let x = fx + stepX;
    let y = fy + stepY;

    while (x !== tx && y !== ty) {
      if (board[x][y]) return false;
      x += stepX;
      y += stepY;
    }

    return true;
  }
}
