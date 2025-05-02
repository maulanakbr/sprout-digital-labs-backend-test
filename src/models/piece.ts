import type { Color, Grid, MovePosition } from '../types/base';

export abstract class Piece {
  constructor(
    public color: Color,
    public symbol: string
  ) {}

  abstract canMove(from: MovePosition, to: MovePosition, board: Grid): boolean;
}

export class King extends Piece {
  constructor(color: Color) {
    super(color, 'K');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition) {
    return Math.abs(fx - tx) <= 1 && Math.abs(fy - ty) <= 1;
  }
}

export class Queen extends Piece {
  constructor(color: Color) {
    super(color, 'Q');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition, board: Grid) {
    return (
      new Rook(this.color).canMove([fx, fy], [tx, ty], board) ||
      new Bishop(this.color).canMove([fx, fy], [tx, ty], board)
    );
  }
}

export class Rook extends Piece {
  constructor(color: Color) {
    super(color, 'R');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition, board: Grid) {
    if (fx !== tx && fy !== ty) return false;

    const stepX = fx === tx ? 0 : fx < tx ? 1 : -1;
    const stepY = fy === ty ? 0 : fy < ty ? 1 : -1;
    let x = fx + stepX;
    let y = fy + stepY;

    while (x !== tx || y !== ty) {
      if (board[x][y]) return false;
      x += stepX;
      y += stepY;
    }

    return true;
  }
}

export class Bishop extends Piece {
  constructor(color: Color) {
    super(color, 'B');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition, board: Grid) {
    if (Math.abs(fx - tx) !== Math.abs(fy - ty)) return false;

    const stepX = fx < tx ? 1 : -1;
    const stepY = fy < ty ? 1 : -1;

    let x = fx + stepX;
    let y = fy + stepY;

    while (x !== tx && y !== ty) {
      if (board[x][y]) return false;
      x += stepX;
      y += stepY;
    }

    return true;
  }
}

export class Knight extends Piece {
  constructor(color: Color) {
    super(color, 'N');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition) {
    const dx = Math.abs(fx - tx);
    const dy = Math.abs(fy - ty);
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  }
}

export class Pawn extends Piece {
  constructor(color: Color) {
    super(color, 'P');
  }

  canMove([fx, fy]: MovePosition, [tx, ty]: MovePosition, board: Grid) {
    const direction = this.color === 'white' ? -1 : 1;
    const startRow = this.color === 'white' ? 6 : 1;

    if (fy === ty && !board[tx][ty]) {
      if (tx === fx + direction) return true;
      if (fx === startRow && tx === fx + 2 * direction && !board[fx + direction][fy]) return true;
    }

    if (
      Math.abs(ty - fy) === 1 &&
      tx === fx + direction &&
      board[tx][ty] &&
      board[tx][ty]?.color !== this.color
    ) {
      return true;
    }

    return false;
  }
}
