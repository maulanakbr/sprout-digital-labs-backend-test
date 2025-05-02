import type { Color, MoveFromPosition, MoveToPosition } from '../../types';
import { Piece } from './piece';

export class King extends Piece {
  constructor(color: Color) {
    super(color, 'K');
  }

  canMove([fx, fy]: MoveFromPosition, [tx, ty]: MoveToPosition) {
    return Math.abs(fx - tx) <= 1 && Math.abs(fy - ty) <= 1;
  }
}
