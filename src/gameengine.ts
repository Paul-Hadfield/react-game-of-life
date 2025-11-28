import GridSetup, { Cell } from './gridsetup';

const applyRules = (isLive: boolean, liveNeighbours: number): boolean => {
  if (isLive) {
    return liveNeighbours === 2 || liveNeighbours === 3;
  }
  return liveNeighbours === 3;
};

const excludeSelf = (cell: Cell, currentCell: Cell): boolean =>
  !(cell.x === currentCell.x && cell.y === currentCell.y);

const isLive = (cell: Cell): boolean => cell.live;

const includeNeighbours = (cell: Cell, currentCell: Cell): boolean =>
  cell.x >= currentCell.x - 1 &&
  cell.x <= currentCell.x + 1 &&
  cell.y >= currentCell.y - 1 &&
  cell.y <= currentCell.y + 1;

const getNumberOfLiveNeighbours = (cell: Cell, currentGrid: Cell[]): number =>
  currentGrid.filter((nc) => excludeSelf(nc, cell)).filter((nc) => includeNeighbours(nc, cell)).filter(isLive).length;

const GameEngine = {
  setupBlinker: (): Cell[] => GridSetup.blinker(),
  setupToad: (): Cell[] => GridSetup.toad(),
  setupBeacon: (): Cell[] => GridSetup.beacon(),
  setupRandom: (): Cell[] => GridSetup.random(),
  setupPulsar: (): Cell[] => GridSetup.pulsar(),
  setupAcorn: (): Cell[] => GridSetup.acorn(),
  setupDiehard: (): Cell[] => GridSetup.diehard(),

  determineNewState: (cell: Cell, currentGrid: Cell[]): Cell => ({
    x: cell.x,
    y: cell.y,
    live: applyRules(cell.live, getNumberOfLiveNeighbours(cell, currentGrid)),
  }),
};

export default GameEngine;
