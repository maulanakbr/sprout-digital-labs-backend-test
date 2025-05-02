import type { Color, Grid, MovePosition } from '../../types';
import { Piece } from './piece';

export class Rook extends Piece {
  constructor(color: Color) {
    super(color, 'R');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition, board: Grid) {
    if (fx !== tx && fy !== ty) return false;

    const stepX = fx === tx ? 0 : fx < tx ? 1 : -1;
    const stepY = fy === ty ? 0 : fy < ty ? 1 : -1;
    let x = fx + stepX;
    let y = fy + stepY;

    while (x !== tx || y !== ty) {
      if (board[x][y]) return false;
      x += stepX;
      y += stepY;
    }

    return true;
  }
}
