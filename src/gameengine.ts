import GridSetup, { Cell } from './setup/gridsetup';

const applyRules = (isLive: boolean, liveNeighbours: number): boolean => {
  if (isLive) {
    return liveNeighbours === 2 || liveNeighbours === 3;
  }
  return liveNeighbours === 3;
};

const encodeCoord = (x: number, y: number): string => `${x},${y}`;

const offsets = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
] as const;

const getNumberOfLiveNeighbours = (cell: Cell, liveSet: Set<string>): number =>
  offsets.reduce((count, [dx, dy]) => (liveSet.has(encodeCoord(cell.x + dx, cell.y + dy)) ? count + 1 : count), 0);

const buildLiveSet = (currentGrid: Cell[]): Set<string> =>
  new Set(currentGrid.filter((c) => c.live).map((c) => encodeCoord(c.x, c.y)));

const GameEngine = {
  setupBlinker: (): Cell[] => GridSetup.blinker(),
  setupToad: (): Cell[] => GridSetup.toad(),
  setupBeacon: (): Cell[] => GridSetup.beacon(),
  setupRandom: (): Cell[] => GridSetup.random(),
  setupPulsar: (): Cell[] => GridSetup.pulsar(),
  setupAcorn: (): Cell[] => GridSetup.acorn(),
  setupDiehard: (): Cell[] => GridSetup.diehard(),

  buildLiveSet,

  determineNewState: (cell: Cell, liveSet: Set<string>): Cell => ({
    x: cell.x,
    y: cell.y,
    live: applyRules(cell.live, getNumberOfLiveNeighbours(cell, liveSet)),
  }),
};

export default GameEngine;
