import React, { useState, useEffect } from 'react';

const MyDate = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {date.toString()}
      </header>
    </div>
  );
};
export default MyDate;