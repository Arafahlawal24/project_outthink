import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CountdownTimerProps {
  countdownSeconds: number;
  onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ countdownSeconds, onComplete }) => {
  const [secondsLeft, setSecondsLeft] = useState(countdownSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 0.1) {
          clearInterval(interval);
          onComplete?.();
          return 0;
        }
        return parseFloat((prev - 0.1).toFixed(1));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <h1>{secondsLeft.toFixed(1)}s</h1>
      </div>
    </div>
  );
};

export default CountdownTimer;
