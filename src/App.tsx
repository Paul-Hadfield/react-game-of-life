import { useEffect, useMemo, useState, type ChangeEvent, type MouseEvent } from 'react';
import './App.css';
import GameEngine from './gameengine';
import Grid from './grid';
import Options from './options';
import type { Cell } from './setup/gridsetup';

type Pattern = 'blinker' | 'beacon' | 'toad' | 'pulsar' | 'acorn' | 'diehard' | 'random';

const initialGridForPattern = (pattern: Pattern): Cell[] => {
  switch (pattern) {
    case 'blinker':
      return GameEngine.setupBlinker();
    case 'beacon':
      return GameEngine.setupBeacon();
    case 'toad':
      return GameEngine.setupToad();
    case 'pulsar':
      return GameEngine.setupPulsar();
    case 'acorn':
      return GameEngine.setupAcorn();
    case 'diehard':
      return GameEngine.setupDiehard();
    case 'random':
    default:
      return GameEngine.setupRandom();
  }
};

const getTimeoutPeriod = (grid: Cell[]): number => {
  if (grid.length >= 5000) {
    return 250;
  }
  if (grid.length >= 2500) {
    return 500;
  }
  if (grid.length >= 500) {
    return 750;
  }
  return 1000;
};

function App() {
  const [pattern, setPattern] = useState<Pattern>('random');
  const [grid, setGrid] = useState<Cell[]>(() => initialGridForPattern('random'));
  const [restartKey, setRestartKey] = useState(0);

  const dimensions = useMemo(() => {
    let rows = 0;
    let cols = 0;

    grid.forEach((cell) => {
      if (cell.x > cols) cols = cell.x;
      if (cell.y > rows) rows = cell.y;
    });

    return {
      width: window.innerWidth,
      height: window.innerHeight,
      rows,
      cols,
    };
  }, [grid]);

  useEffect(() => {
    // reset grid when pattern or restartKey changes
    setGrid(initialGridForPattern(pattern));
  }, [pattern, restartKey]);

  useEffect(() => {
    const timeoutPeriod = getTimeoutPeriod(grid);
    const liveSet = GameEngine.buildLiveSet(grid);
    const timerId = setTimeout(() => {
      const newGrid = grid.map((cell) => GameEngine.determineNewState(cell, liveSet));
      setGrid(newGrid);
    }, timeoutPeriod);
    return () => clearTimeout(timerId);
  }, [grid]);

  const handleTypeChanged = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    setPattern(changeEvent.target.value as Pattern);
    setRestartKey((key) => key + 1);
  };

  const handleRestartClicked = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setRestartKey((key) => key + 1);
  };

  return (
    <div className="App">
      <Grid key={restartKey} dimensions={dimensions} gameGrid={grid} />
      <Options pattern={pattern} typeChanged={handleTypeChanged} restartClick={handleRestartClicked} />
    </div>
  );
}

export default App;
