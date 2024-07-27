import { useState } from "react";

export default function ClockComponent() {
  const [time, setTime] = useState();
  let timeNow = new Date().toLocaleTimeString();

  const UpdateTime = () => {
    timeNow = new Date().toLocaleTimeString();
    setTime(timeNow);
  };
  setInterval(UpdateTime);
  return (
    <div className="absolute top-5 right-5">
      <p className="text-3xl text-white">{time}</p>
    </div>
  );
}
