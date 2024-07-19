import React from 'react';
import Lottie from 'react-lottie';
import animationData from './noresults.json'; // Replace with the path to your JSON file

const NoResult = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={600} width={700} />
    </div>
  );
};

export default NoResult;