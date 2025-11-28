import type { Cell } from './types';
import { buildEmptyGrid } from './utils';

export const acorn = (): Cell[] => {
  const grid = buildEmptyGrid(9, 5);
  grid
    .filter((c) => c.x >= 2 && c.x <= 3 && c.y === 4)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => c.x >= 6 && c.x <= 8 && c.y === 4)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => c.x === 3 && c.y === 2)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => c.x === 5 && c.y === 3)
    .forEach((cell) => {
      cell.live = true;
    });
  return grid;
};
