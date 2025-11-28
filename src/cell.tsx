import type { Cell as CellType } from './setup/gridsetup';

type Props = {
  cell: CellType;
};

export const Cell = ({ cell }: Props) => {
  const stateClass = cell.live ? 'liveCell' : 'deadCell';
  return <div className={`cell ${stateClass}`}></div>;
};
