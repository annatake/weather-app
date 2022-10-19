import React from 'react';

function Greeting(props) {

  let [day, date, month] = props.currentDate;
  let [hour, minutes, ampm] = props.currentTime;
  let greeting = "Hello!";

  if (ampm === "am" && hour >= 5 && hour < 12) {
    greeting = "Good Morning";

  } else if (ampm === "pm") {
    if (hour === 12 || (hour >= 1 && hour < 5)) {
      greeting = "Good Afternoon";
    }
    else if (hour >= 5 && hour < 9){
      greeting = "Good Evening";
    }
     else if (hour >= 9) {
      greeting = "Good Night";
    }
  }
  
  return(
    <div className="greeting-card" data-testid="greeting-card">
      <div id="greeting" data-testid="greeting">{greeting}</div>
      <p className="date-time">{day} | {month} {date} | {hour}:{minutes}{ampm}</p>
    </div>
  );
}


export default Greeting;