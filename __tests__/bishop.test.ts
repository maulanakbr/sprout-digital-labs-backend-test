import { Board } from '../src/models/board';
import { Bishop } from '../src/models/pieces/bishop';
import type { Grid } from '../src/types';

describe('Bishop movement', () => {
  let board: Grid;

  beforeEach(() => {
    const boardInstance = new Board();
    board = boardInstance.grid;
  });

  it('allows diagonal movement on empty path', () => {
    const bishop = new Bishop('white');
    board[4][4] = bishop;

    board[3][3] = null;
    board[2][2] = null;
    board[1][1] = null;

    expect(bishop.canMove([4, 4], [1, 1], board)).toBe(true);
  });

  it('disallows non-diagonal movement', () => {
    const bishop = new Bishop('white');
    board[4][4] = bishop;

    expect(bishop.canMove([4, 4], [4, 6], board)).toBe(false);
    expect(bishop.canMove([4, 4], [2, 4], board)).toBe(false);
  });

  it('disallows diagonal movement when path is blocked', () => {
    const bishop = new Bishop('white');
    board[4][4] = bishop;

    board[3][3] = new Bishop('white');

    expect(bishop.canMove([4, 4], [1, 1], board)).toBe(false);
  });

  it('allows movement to diagonal square occupied by enemy (capture)', () => {
    const bishop = new Bishop('white');
    board[4][4] = bishop;

    board[3][3] = null;
    board[2][2] = null;

    board[1][1] = new Bishop('black');

    expect(bishop.canMove([4, 4], [1, 1], board)).toBe(true);
  });

  it('disallows movement to diagonal square occupied by ally', () => {
    const bishop = new Bishop('white');
    board[4][4] = bishop;

    board[3][3] = null;
    board[2][2] = null;

    board[1][1] = new Bishop('white');

    expect(bishop.canMove([4, 4], [1, 1], board)).toBe(false);
  });
});
