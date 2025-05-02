import type { Color, Grid, MoveFromPosition, MoveToPosition } from '../../types';

export abstract class Piece {
  constructor(
    public color: Color,
    public symbol: string
  ) {}

  abstract canMove(from: MoveFromPosition, to: MoveToPosition, board: Grid): boolean;
}
