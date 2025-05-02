import { Board } from '../src/models/board';
import { DIMENSION } from '../src/utils/constants';

describe('Board', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board();
  });

  test('initializes with kings in correct positions', () => {
    expect(board.grid[0][4]?.symbol).toBe('K');
    expect(board.grid[7][4]?.symbol).toBe('K');
  });

  test('initializes with pawns on row 1 and 6', () => {
    for (let col = 0; col < DIMENSION; col++) {
      expect(board.grid[1][col]?.symbol).toBe('P');
      expect(board.grid[6][col]?.symbol).toBe('P');
    }
  });

  test('initializes with correct back row pieces for black', () => {
    const expected = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
    for (let col = 0; col < DIMENSION; col++) {
      expect(board.grid[0][col]?.symbol).toBe(expected[col]);
    }
  });

  test('initializes with correct back row pieces for white', () => {
    const expected = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
    for (let col = 0; col < DIMENSION; col++) {
      expect(board.grid[7][col]?.symbol).toBe(expected[col]);
    }
  });

  test('middle board squares are empty', () => {
    for (let row = 2; row <= 5; row++) {
      for (let col = 0; col < DIMENSION; col++) {
        expect(board.grid[row][col]).toBeNull();
      }
    }
  });
});
