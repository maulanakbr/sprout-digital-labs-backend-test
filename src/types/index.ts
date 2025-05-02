import { Piece } from '../models/pieces/piece';

export type Color = 'white' | 'black';

export type Grid = (Piece | null)[][];

export type MoveFromPosition = [number, number];

export type MoveToPosition = MoveFromPosition;
