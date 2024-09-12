import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

const loaderWrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
};

export const Spinner = () => {
  return (
    <div style={loaderWrapper}>
      <PulseLoader
        size={15}
        color="#36d7b7"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
