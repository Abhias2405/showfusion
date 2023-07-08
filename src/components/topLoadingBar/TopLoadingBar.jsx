import React, { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';

const TopLoadingBar = ({ progress }) => {
  const ref = useRef(null);

  return (
    <LoadingBar color="#f11946" progress={progress} ref={ref} />
  );
};

export default TopLoadingBar;
