import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <gmp-map-3d
        center="52.10028, 5.77250"
        tilt="45"
        heading="30"
        range="1000"
      ></gmp-map-3d>
    </div>
  );
}

export default App;
