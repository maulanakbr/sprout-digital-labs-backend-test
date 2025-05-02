import type { Color, Grid, MovePosition } from '../../types';

export abstract class Piece {
  constructor(
    public color: Color,
    public symbol: string
  ) {}

  abstract canMove(from: MovePosition, to: MovePosition, board: Grid): boolean;
}
