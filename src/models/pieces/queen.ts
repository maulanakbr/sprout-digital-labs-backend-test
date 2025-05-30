import type { Color, Grid, MoveFromPosition, MoveToPosition } from '../../types';
import { Bishop } from './bishop';
import { Piece } from './piece';
import { Rook } from './rook';

export class Queen extends Piece {
  constructor(color: Color) {
    super(color, 'Q');
  }

  canMove([fx, fy]: MoveFromPosition, [tx, ty]: MoveToPosition, board: Grid) {
    return (
      new Rook(this.color).canMove([fx, fy], [tx, ty], board) ||
      new Bishop(this.color).canMove([fx, fy], [tx, ty], board)
    );
  }
}
