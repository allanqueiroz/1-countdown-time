import React from "react";

const InputEvent = ({ eventName, setEventName }) => {
  return (
    <>
      <label>Countdown title</label>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={({ target }) => setEventName(target.value)}
      />
    </>
  );
};
export default InputEvent;
