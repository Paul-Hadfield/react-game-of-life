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
  const cellSize = Math.floor(
    Math.min(
      ...[
        ((dimensions.width - 100) * 0.8) / dimensions.cols,
        (dimensions.height * 0.8) / dimensions.rows,
        200,
      ],
    ),
  );

  const styles = {
    width: `${dimensions.cols * cellSize}px`,
    gridTemplateColumns: `repeat(${dimensions.cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${dimensions.rows}, ${cellSize}px)`,
  };

  return (
    <div className="grid" style={styles}>
      {gameGrid.map((cell, index) => (
        <Cell key={index} cell={cell} />
      ))}
    </div>
  );
};
