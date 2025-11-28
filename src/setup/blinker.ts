import type { Cell } from './types';
import { buildEmptyGrid } from './utils';

const blinker = (): Cell[] => {
  const grid = buildEmptyGrid(5, 5);
  grid
    .filter((c) => c.x >= 2 && c.x <= 4)
    .filter((c) => c.y === 3)
    .forEach((cell) => {
      cell.live = true;
    });
  return grid;
};

export default blinker;
