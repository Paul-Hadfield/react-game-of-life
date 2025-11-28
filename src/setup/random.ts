import type { Cell } from './types';
import { buildEmptyGrid, getRandomIntInclusive } from './utils';

const random = (): Cell[] => {
  const grid = buildEmptyGrid(50, 50);
  grid.forEach((cell) => {
    cell.live = getRandomIntInclusive(0, 100) > 66;
  });
  return grid;
};

export default random;
