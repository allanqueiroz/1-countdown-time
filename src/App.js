import React from "react";
import InputEvent from "./components/inputEvent";
import InputTime from "./components/inputTime";
import BtnModel from "./components/button";
import ShowEvents from "./components/showEventList";
import "./globalStyle.css";

function App() {
  const [eventName, setEventName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [listEvents, setListEvents] = React.useState([]);

  const addEvent = () => {
    if (!eventName) alert("Set a name for the event");
    else if (!date) alert("Set a date for the event");
    else {
      setListEvents([
        ...listEvents,
        {
          eName: eventName,
          date: date,
        },
      ]);
    }
  };
  return (
    <div className="container">
      <h1>COUNTDOWN</h1>
      <InputEvent eventName={eventName} setEventName={setEventName} />
      <InputTime date={date} setDate={setDate} />
      <BtnModel name="Add event" className="btn-event" funcClick={addEvent} />
      <ShowEvents listEvents={listEvents} />
    </div>
  );
}

export default App;
