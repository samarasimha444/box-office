import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Components/nopagefound.json'; 
const Nopage= () => {
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
      <Lottie options={defaultOptions} height={700} width={1200} />
    </div>
  );
};

export default Nopage;
