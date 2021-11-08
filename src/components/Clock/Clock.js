import { useState, useEffect, useRef } from "react";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      // console.log("Это интервал каждые 1000 мс" + new Date());
      setTime(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <p>Текущее время {time.toLocaleTimeString()}</p>
      <button type="button">Остановить</button>
    </div>
  );
}
