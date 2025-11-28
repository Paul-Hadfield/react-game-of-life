import { useMemo } from 'react';
import { Cell } from './cell';
import type { Cell as CellType } from './setup/gridsetup';

type Dimensions = {
  width: number;
  height: number;
  rows: number;
  cols: number;
};

type Props = {
  dimensions: Dimensions;
  gameGrid: CellType[];
};

export const Grid = ({ dimensions, gameGrid }: Props) => {
  const { width, height, cols, rows } = dimensions;

  const cellSize = useMemo(() => {
    return Math.floor(
      Math.min(
        ...[
          ((width - 100) * 0.8) / cols,
          (height * 0.8) / rows,
          200,
        ],
      ),
    );
  }, [width, height, cols, rows]);

  const styles = useMemo(
    () => ({
      width: `${cols * cellSize}px`,
      gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
      gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    }),
    [cols, rows, cellSize],
  );

  return (
    <div className="grid" style={styles}>
      {gameGrid.map((cell) => (
        <Cell key={`${cell.x}-${cell.y}`} cell={cell} />
      ))}
    </div>
  );
};
