import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState('OFF');

  return (
    <>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}
      >
        {/* light ON/OFF BUTTON */}
        {light === 'ON' ? 'LIGHT OFF' : 'LIGHT ON'}
      </button>
    </>
  );
};

export default Bulb;
