import { useState, useEffect } from "react";

// custom react hook for retrieving current Date
export default function useCurrentDate() {

  const [today, setDate] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setDate(new Date());
      }, 1000);
      return () => {
        clearInterval(timer);
      }
    }, []);

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];

    return [day, date, month];

}