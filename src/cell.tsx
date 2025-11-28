import type { Cell as CellType } from './gridsetup';

type Props = {
  cell: CellType;
};

const Cell = ({ cell }: Props) => {
  return <div className="cell" style={{ backgroundColor: cell.live ? 'black' : 'white' }}></div>;
};

export default Cell;
