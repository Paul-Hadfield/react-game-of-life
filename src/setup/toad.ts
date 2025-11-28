import type { Cell } from './types';
import { buildEmptyGrid } from './utils';

export const toad = (): Cell[] => {
  const grid = buildEmptyGrid(6, 6);
  grid
    .filter((c) => c.x >= 2 && c.x <= 4)
    .filter((c) => c.y === 3)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => c.x >= 3 && c.x <= 5)
    .filter((c) => c.y === 4)
    .forEach((cell) => {
      cell.live = true;
    });
  return grid;
};
