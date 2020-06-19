import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [dots, setDots] = useState(0);
  let count = 0;
  let loadingDots = ['.  ', ' . ', '  .'];
  useEffect(() => {
    const interval = setInterval(() => {
        setDots((dots) => {
            dots = loadingDots[count];
            if (count === 3) count = 0
            else count++
            return dots
        })
      }, 200);
      return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h2>
       Loading...{dots}
       </h2>
    </div>
  );
}

export default Loading;