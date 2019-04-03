import React from 'react';
import './App.css';

const Grid = ({grid}) => {
  
  return (
    <div className="grid">
      {grid.map((cell, index) => <div key={index} className="cell" style={{backgroundColor: cell.live ? 'black' : 'white' }}></div>)}
    </div>
  ); 
}

function App() {

  console.log('here');

  let [grid, setGrid] = React.useState([]);
  if(grid.length == 0)
  {
    let x = 1;
    let y = 1;
    for(let i = 1; i <= 25; i++){
      let live = false;
      if(x == 3) {
        if(y == 2 | y == 3 | y == 4) {
          live = true;
        }
      }
      grid.push({x, y, live});
      x++; 
      if( x > 5){ x = 1; y++; }
    }
  }
  const determineNewState = (cell) => {
    return {x: cell.x, y: cell.y, live: cell.live == false};
  };

      React.useEffect(() => {

      const timerId = setTimeout(() => {
        const newGrid = grid.map(cell => determineNewState(cell));
        setGrid(newGrid);
      }, 1000);
      return () => clearTimeout(timerId);
      
    });
  

  return (
    <div className="App">
      <Grid grid={grid} />
    </div>
  );
}

export default App;

const Util = {
  range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i)
}