import type { Color, MovePosition } from '../../types';
import { Piece } from './piece';

export class King extends Piece {
  constructor(color: Color) {
    super(color, 'K');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition) {
    return Math.abs(fx - tx) <= 1 && Math.abs(fy - ty) <= 1;
  }
}
