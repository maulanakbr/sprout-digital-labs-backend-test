import { Board } from '../src/models/board';
import { King } from '../src/models/pieces/king';
import type { Grid } from '../src/types';

describe('King movement', () => {
  let board: Grid;

  beforeEach(() => {
    const boardInstance = new Board();
    board = boardInstance.grid;
  });

  it('allows moving one square in any direction', () => {
    const king = new King('white');
    board[4][4] = king;

    const validMoves: [number, number][] = [
      [3, 3],
      [3, 4],
      [3, 5],
      [4, 3],
      [4, 5],
      [5, 3],
      [5, 4],
      [5, 5],
    ];

    validMoves.forEach(([tx, ty]) => {
      expect(king.canMove([4, 4], [tx, ty])).toBe(true);
    });
  });

  it('disallows moving more than one square in any direction', () => {
    const king = new King('white');
    board[4][4] = king;

    const invalidMoves: [number, number][] = [
      [2, 4],
      [4, 6],
      [6, 6],
      [6, 2],
    ];

    invalidMoves.forEach(([tx, ty]) => {
      expect(king.canMove([4, 4], [tx, ty])).toBe(false);
    });
  });

  it('disallows moving to the same square', () => {
    const king = new King('white');
    board[4][4] = king;

    expect(king.canMove([4, 4], [4, 4])).toBe(false);
  });
});
