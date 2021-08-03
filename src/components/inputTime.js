import React from "react";
import moment from "moment";

const InputTime = ({ date, setDate }) => {
  // console.log(moment().format("YYYY-MM-DD"));
  return (
    <>
      <label>Countdown to date</label>
      <input
        type="date"
        value={date}
        onChange={({ target }) => setDate(target.value)}
        min={moment().format("YYYY-MM-DD")}
      />
      <span>{date}</span>
    </>
  );
};
export default InputTime;
