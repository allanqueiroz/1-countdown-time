import React from "react";
import InputEvent from "./components/inputEvent";
import InputDate from "./components/inputDate";
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
          id: `${eventName.slice(0, 5).trim()}${date}`,
          eName: eventName,
          date: date,
        },
      ]);
      setEventName("");
      setDate("");
    }
  };
  return (
    <div className="container">
      <h1>COUNTDOWN</h1>
      <div className="event-and-date">
        <InputEvent eventName={eventName} setEventName={setEventName} />
        <InputDate date={date} setDate={setDate} />
      </div>
      <BtnModel name="ADD EVENT" clas="btn-event" funcClick={addEvent} />
      {listEvents.length ? (
        <ShowEvents listEvents={listEvents} setListEvents={setListEvents} />
      ) : null}
    </div>
  );
}

export default App;
