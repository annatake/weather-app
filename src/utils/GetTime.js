import { useState, useEffect } from "react";

// custom react hook for retrieving current time
export default function useCurrentTime() {
  const [today, setTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 10000); // set our time state every 10000ms (10s)
      return () => {
        clearInterval(timer);
      }
    }, []);
  
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let ampm = (hour >= 12) ? 'pm' : 'am'
    // convert 24-hour clock to 12-hour
    hour = hour % 12;
    // if hour is 0, it should be 12am
    hour = (hour === 0) ? '12' : hour;
    minutes = (minutes < 10) ? '0'+ minutes : minutes;

    return [hour, minutes, ampm];

}