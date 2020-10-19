import React from 'react';


import './App.css';
import Box from './Box';
import Search from "./Search"

function App() {
  return (
    <div className="App">
      <div className="Body">
        <Search />
        <Box />
      </div>
    </div>
  );
}

export default App;
