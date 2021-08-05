import React from "react";

const InputEvent = ({ eventName, setEventName }) => {
  return (
    <div className="cFlex1">
      <label>Countdown title</label>
      <br />
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={({ target }) => setEventName(target.value)}
      />
    </div>
  );
};
export default InputEvent;
