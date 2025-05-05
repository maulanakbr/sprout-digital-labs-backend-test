import { Board } from '../src/models/board';
import { Pawn } from '../src/models/pieces/pawn';
import type { Grid } from '../src/types';

describe('Pawn movement', () => {
  let board: Grid;

  beforeEach(() => {
    const boardInstance = new Board();
    board = boardInstance.grid;
  });

  it('allows single forward move to empty square', () => {
    const whitePawn = board[6][4];
    expect(whitePawn?.canMove([6, 4], [5, 4], board)).toBe(true);

    const blackPawn = board[1][3];
    expect(blackPawn?.canMove([1, 3], [2, 3], board)).toBe(true);
  });

  it('allows double forward move from starting row', () => {
    const whitePawn = board[6][4];
    expect(whitePawn?.canMove([6, 4], [4, 4], board)).toBe(true);

    const blackPawn = board[1][2];
    expect(blackPawn?.canMove([1, 2], [3, 2], board)).toBe(true);
  });

  it('disallows double forward move not from starting row', () => {
    const whitePawn = board[6][4];
    board[5][4] = whitePawn;
    board[6][4] = null;
    expect(whitePawn?.canMove([5, 4], [3, 4], board)).toBe(false);
  });

  it('disallows forward move to occupied square', () => {
    const whitePawn = board[6][4];
    board[5][4] = new Pawn('black');
    expect(whitePawn?.canMove([6, 4], [5, 4], board)).toBe(false);
  });

  it('allows diagonal capture of enemy', () => {
    const whitePawn = board[6][4];
    board[5][5] = new Pawn('black');
    expect(whitePawn?.canMove([6, 4], [5, 5], board)).toBe(true);
  });

  it('disallows diagonal move with no enemy', () => {
    const whitePawn = board[6][4];
    expect(whitePawn?.canMove([6, 4], [5, 5], board)).toBe(false);
  });

  it('disallows backward move', () => {
    const whitePawn = board[6][4];
    expect(whitePawn?.canMove([6, 4], [7, 4], board)).toBe(false);
  });

  it('disallows sideways move', () => {
    const whitePawn = board[6][4];
    expect(whitePawn?.canMove([6, 4], [6, 5], board)).toBe(false);
  });
});
