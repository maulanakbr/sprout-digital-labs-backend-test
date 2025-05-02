import type { Color, MovePosition } from '../../types';
import { Piece } from './piece';

export class Knight extends Piece {
  constructor(color: Color) {
    super(color, 'N');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition) {
    const dx = Math.abs(fx - tx);
    const dy = Math.abs(fy - ty);
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  }
}
