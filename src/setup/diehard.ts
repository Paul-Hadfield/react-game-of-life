import type { Cell } from './types';
import { buildEmptyGrid } from './utils';

export const diehard = (): Cell[] => {
  const grid = buildEmptyGrid(10, 5);
  grid
    .filter((c) => c.x >= 7 && c.x <= 9 && c.y === 4)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => c.x === 8 && c.y === 2)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => c.x >= 2 && c.x <= 3 && c.y === 3)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => c.x === 3 && c.y === 4)
    .forEach((cell) => {
      cell.live = true;
    });
  return grid;
};
