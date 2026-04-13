import React from 'react';
import { APIProvider, Map3D } from '@vis.gl/react-google-maps';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* version="alpha" is verplicht voor de 3D-weergave */}
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} version="alpha">
        <Map3D
          style={{ width: '100vw', height: '100vh' }}
          center={{ lat: 52.10028, lng: 5.77250, altitude: 500 }} // Let op: altitude is de hoogte in meters
          tilt={60}
          heading={30}
        />
      </APIProvider>
    </div>
  );
}

export default App;