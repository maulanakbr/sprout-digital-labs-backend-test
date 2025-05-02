import { Piece } from '../models/pieces/piece';

export type Color = 'white' | 'black';

export type Grid = (Piece | null)[][];

export type MovePosition = [number, number];
