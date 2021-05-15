import React from 'react';
import logo from './logo.svg';
import SortingVisualizer from './Sorting Visualizer/SortingVisualizer';
import './App';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-graph-vector-icon-png-image_3791383.jpg" width ="200" className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}
export default App;