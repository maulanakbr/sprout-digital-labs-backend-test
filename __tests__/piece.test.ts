import type { Grid } from '../src/types';
import { MockPiece } from '../src/models/pieces/mocks/mock-piece';

describe('Piece (abstract)', () => {
  test('should store color and symbol correctly', () => {
    const piece = new MockPiece('white');
    expect(piece.color).toBe('white');
    expect(piece.symbol).toBe('X');
  });

  test('should allow subclass to implement canMove', () => {
    const piece = new MockPiece('black');

    const mockBoard: Grid = Array.from({ length: 8 }, () => Array(8).fill(null));
    const result = piece.canMove([0, 0], [1, 0], mockBoard);

    expect(result).toBe(true);
  });
});
