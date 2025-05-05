import { Board } from '../src/models/board';
import { Rook } from '../src/models/pieces/rook';
import type { Grid } from '../src/types';

describe('Rook movement', () => {
  let board: Grid;

  beforeEach(() => {
    const boardInstance = new Board();
    board = boardInstance.grid;
  });

  it('allows vertical movement on an empty path', () => {
    const rook = new Rook('white');
    board[4][4] = rook;

    board[5][4] = null;
    board[6][4] = null;

    expect(rook.canMove([4, 4], [6, 4], board)).toBe(true);
  });

  it('allows horizontal movement on an empty path', () => {
    const rook = new Rook('white');
    board[4][4] = rook;

    board[4][5] = null;
    board[4][6] = null;

    expect(rook.canMove([4, 4], [4, 6], board)).toBe(true);
  });

  it('disallows diagonal movement', () => {
    const rook = new Rook('white');
    board[4][4] = rook;

    expect(rook.canMove([4, 4], [5, 5], board)).toBe(false);
    expect(rook.canMove([4, 4], [3, 5], board)).toBe(false);
  });

  it('disallows movement blocked by piece in path (vertical)', () => {
    const rook = new Rook('white');
    board[4][4] = rook;

    board[5][4] = new Rook('white');

    expect(rook.canMove([4, 4], [6, 4], board)).toBe(false);
  });

  it('disallows movement blocked by piece in path (horizontal)', () => {
    const rook = new Rook('white');
    board[4][4] = rook;

    board[4][5] = new Rook('white');

    expect(rook.canMove([4, 4], [4, 6], board)).toBe(false);
  });

  it('disallows non-straight movement (diagonal)', () => {
    const rook = new Rook('white');
    board[4][4] = rook;

    expect(rook.canMove([4, 4], [5, 5], board)).toBe(false);
    expect(rook.canMove([4, 4], [3, 5], board)).toBe(false);
  });

  it('disallows movement not in a straight line', () => {
    const rook = new Rook('white');
    board[4][4] = rook;

    expect(rook.canMove([4, 4], [5, 6], board)).toBe(false);
  });
});
