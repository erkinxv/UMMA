import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12) * 30 + minutes / 2;
  const minuteDeg = minutes * 6 + seconds / 10;
  const secondDeg = seconds * 6;

  return (
    <svg
      width="72"
      height="72"
      viewBox="-100 -100 200 200"
    >
      {[3,  6,  9, 12].map((hour) => {
        const angle = ((hour - 3) * 30 * Math.PI) / 180;
        const x = 80 * Math.cos(angle);
        const y = 80 * Math.sin(angle);
        return (
          <text
            key={hour}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="24"
            fill="#000"
          >
            {hour}
          </text>
        );
      })}

      {/* Стрелки */}
      <circle cx="0" cy="0" r="2" fill="#000" />
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="-60"
        strokeWidth="4"
        stroke="#000"
        transform={`rotate(${hourDeg})`}
      />
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="-80"
        strokeWidth="2"
        stroke="#000"
        transform={`rotate(${minuteDeg})`}
      />
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="-9`0"
        stroke="#f00"
        strokeWidth="1"
        transform={`rotate(${secondDeg})`}
      />
    </svg>
  );
}

export default Clock;
