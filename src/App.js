import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import './App.css';

function App() {
  return (
    <div className="App">
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map
          style={{ width: '100vw', height: '100vh' }}
          defaultCenter={{ lat: 52.1014784, lng: 5.7719492 }}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
}

export default App;
