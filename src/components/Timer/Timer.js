import { useState, useEffect } from 'react';

const Timer = () => {
  const [start, setStart] = useState(Date.now());
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => setCurr(Date.now() - start), 1000);

    return () => clearInterval(timerID);
  }, []);

  function msToHMS(ms) {
    let seconds = ms / 1000;
    const hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = parseInt(seconds / 60);
    seconds = parseInt(seconds % 60);
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div>
      {msToHMS(curr)}
    </div>
  );
}

export default Timer;