import React from 'react';
import useCurrentDate from '../utils/GetDate';
import useCurrentTime from '../utils/GetTime';


function Greeting() {
  let [day, date, month] = useCurrentDate();
  let [hour, minutes, ampm] = useCurrentTime();
  let greeting = "Hello";

  if (ampm === "am" && hour >= 5) {
    greeting = "Good Morning";

  } else if (ampm === "pm") {
    if (hour >= 12 && hour < 5) {
      greeting = "Good Afternoon";
    } else if (hour >= 5 && hour < 9) {
      greeting = "Good Evening";
    } else if (hour >= 9) {
      greeting = "Good Night";
    }
  }
  
  return(
    <div className="greeting-card">
      <div id="greeting">{greeting}</div>
      {day} | {month} {date} | {hour}:{minutes}{ampm}
    </div>
  );
}


export default Greeting;