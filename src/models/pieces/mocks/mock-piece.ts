import { Piece } from '../piece';
import type { Color, Grid, MoveFromPosition, MoveToPosition } from '../../../types';

export class MockPiece extends Piece {
  constructor(color: Color) {
    super(color, 'X');
  }

  canMove(from: MoveFromPosition, to: MoveToPosition, board: Grid): boolean {
    return true;
  }
}
