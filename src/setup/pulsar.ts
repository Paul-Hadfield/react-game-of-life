import type { Cell } from './types';
import { buildEmptyGrid } from './utils';

export const pulsar = (): Cell[] => {
  const grid = buildEmptyGrid(17, 17);
  grid
    .filter((c) => ((c.x >= 5 && c.x <= 7) || (c.x >= 11 && c.x <= 13)) && c.y === 3)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => ((c.x >= 5 && c.x <= 7) || (c.x >= 11 && c.x <= 13)) && c.y === 8)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => ((c.x >= 5 && c.x <= 7) || (c.x >= 11 && c.x <= 13)) && c.y === 10)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => ((c.x >= 5 && c.x <= 7) || (c.x >= 11 && c.x <= 13)) && c.y === 15)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => ((c.y >= 5 && c.y <= 7) || (c.y >= 11 && c.y <= 13)) && c.x === 3)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => ((c.y >= 5 && c.y <= 7) || (c.y >= 11 && c.y <= 13)) && c.x === 8)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => ((c.y >= 5 && c.y <= 7) || (c.y >= 11 && c.y <= 13)) && c.x === 10)
    .forEach((cell) => {
      cell.live = true;
    });
  grid
    .filter((c) => ((c.y >= 5 && c.y <= 7) || (c.y >= 11 && c.y <= 13)) && c.x === 15)
    .forEach((cell) => {
      cell.live = true;
    });
  return grid;
};
