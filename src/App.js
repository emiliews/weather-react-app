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
        <footer>
          <a href="https://github.com/emiliews/weather-react-app" target="blank">Open source code</a> by Emilie Lolk Wolff-Sneedorff
        </footer>
        <br/>
        <br/>
        
      </div>
    </div>
  );
}

export default App;
