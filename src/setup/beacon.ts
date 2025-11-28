import type { Cell } from './types';
import { buildEmptyGrid } from './utils';

export const beacon = (): Cell[] => {
  const grid = buildEmptyGrid(6, 6);
  grid
    .filter((c) => c.x === 2 || c.x === 3)
    .filter((c) => c.y === 2 || c.y === 3)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => c.x === 4 || c.x === 5)
    .filter((c) => c.y === 4 || c.y === 5)
    .forEach((cell) => {
      cell.live = true;
    });
  return grid;
};
