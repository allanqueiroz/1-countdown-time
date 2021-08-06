import React from "react";

const InputEvent = ({ eventName, setEventName }) => {
  return (
    <div className="cFlex1">
      <label>Countdown Event</label>
      <br />
      <input
        type="text"
        placeholder="name the event"
        value={eventName}
        onChange={({ target }) => setEventName(target.value)}
      />
    </div>
  );
};
export default InputEvent;
