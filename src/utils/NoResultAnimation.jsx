
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../data/no_results.json';

const NoResultsAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div ref={container} style={{ width: 300, height: 300 }}></div>
      <p>No results found</p>
    </div>
  );
};

export default NoResultsAnimation;
