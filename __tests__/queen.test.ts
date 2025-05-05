import { Board } from '../src/models/board';
import { Queen } from '../src/models/pieces/queen';
import { Bishop } from '../src/models/pieces/bishop';
import { Rook } from '../src/models/pieces/rook';
import type { Grid } from '../src/types';

describe('Queen movement', () => {
  let board: Grid;

  beforeEach(() => {
    const boardInstance = new Board();
    board = boardInstance.grid;
  });

  it('allows straight movement like a rook', () => {
    const queen = new Queen('white');
    board[4][4] = queen;

    board[5][4] = null;
    board[6][4] = null;

    expect(queen.canMove([4, 4], [6, 4], board)).toBe(true);
  });

  it('allows diagonal movement like a bishop', () => {
    const queen = new Queen('white');
    board[4][4] = queen;

    board[3][3] = null;
    board[2][2] = null;

    expect(queen.canMove([4, 4], [2, 2], board)).toBe(true);
  });

  it('disallows movement blocked by piece in path (rook-like)', () => {
    const queen = new Queen('white');
    board[4][4] = queen;

    board[5][4] = new Rook('white');

    expect(queen.canMove([4, 4], [6, 4], board)).toBe(false);
  });

  it('disallows movement blocked by piece in path (bishop-like)', () => {
    const queen = new Queen('white');
    board[4][4] = queen;

    board[3][3] = new Bishop('white');

    expect(queen.canMove([4, 4], [2, 2], board)).toBe(false);
  });

  it('disallows movement not in straight or diagonal line', () => {
    const queen = new Queen('white');
    board[4][4] = queen;

    expect(queen.canMove([4, 4], [5, 6], board)).toBe(false);
  });
});
