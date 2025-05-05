import type { Color, MoveFromPosition, MoveToPosition } from '../../types';
import { Piece } from './piece';

export class King extends Piece {
  constructor(color: Color) {
    super(color, 'K');
  }

  canMove([fx, fy]: MoveFromPosition, [tx, ty]: MoveToPosition) {
    const dx = Math.abs(fx - tx);
    const dy = Math.abs(fy - ty);
    return (dx !== 0 || dy !== 0) && dx <= 1 && dy <= 1;
  }
}
