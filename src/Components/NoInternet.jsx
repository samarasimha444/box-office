import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Components/Nointernet.json'; 
const NoInternet= () => {
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
      <Lottie options={defaultOptions}  height={600} width={400}/>
    </div>
  );
};

export default NoInternet;