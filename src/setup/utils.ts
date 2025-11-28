import type { Cell } from './types';

const range = (min: number, max: number): number[] =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i);

export const buildEmptyGrid = (cols: number, rows: number): Cell[] => {
  let x = 1;
  let y = 1;
  const numberOfCells = rows * cols;
  const grid: Cell[] = [];

  range(1, numberOfCells).forEach(() => {
    grid.push({ x, y, live: false });
    x += 1;
    if (x > cols) {
      x = 1;
      y += 1;
    }
  });

  return grid;
};

export const getRandomIntInclusive = (min: number, max: number): number => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};
