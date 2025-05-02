import { Piece } from '../models/piece';

export type Color = 'white' | 'black';

export type Grid = (Piece | null)[][];

export type MovePosition = [number, number];
