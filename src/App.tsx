import React from 'react';
import ShotClock from './components/ShotClock';

function App() {
  return (
    <div className="text-center p-2">
      <h1 className="font-bold text-3xl text-gray-800 my-2">
        <span role="img" aria-label="Basketball">
          🏀
        </span>
      </h1>
      <hr className="border" />

      <div className="grid grid-cols-2 gap-4 p-4">
        <ShotClock />
        <ShotClock />
      </div>
    </div>
  );
}

export default App;
