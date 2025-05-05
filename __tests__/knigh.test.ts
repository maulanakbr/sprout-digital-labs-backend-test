import { Board } from '../src/models/board';
import { Knight } from '../src/models/pieces/knight';
import type { Grid } from '../src/types';

describe('Knight movement', () => {
  let board: Grid;

  beforeEach(() => {
    const boardInstance = new Board();
    board = boardInstance.grid;
  });

  it('allows L-shaped movement (2 by 1)', () => {
    const knight = new Knight('white');
    board[4][4] = knight;

    const validMoves: [number, number][] = [
      [2, 3],
      [2, 5],
      [3, 2],
      [3, 6],
      [5, 2],
      [5, 6],
      [6, 3],
      [6, 5],
    ];

    validMoves.forEach(([tx, ty]) => {
      expect(knight.canMove([4, 4], [tx, ty])).toBe(true);
    });
  });

  it('disallows invalid knight movement', () => {
    const knight = new Knight('white');
    board[4][4] = knight;

    const invalidMoves: [number, number][] = [
      [4, 4],
      [4, 5],
      [5, 5],
      [2, 2],
      [6, 6],
      [3, 3],
    ];

    invalidMoves.forEach(([tx, ty]) => {
      expect(knight.canMove([4, 4], [tx, ty])).toBe(false);
    });
  });
});
