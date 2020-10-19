import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Weather from './Weather';
import Search from "./Search"

function App() {
  return (
    <div className="App">
      <div className="Body">
        <Search />
        <Weather />
      </div>
    </div>
  );
}

export default App;
