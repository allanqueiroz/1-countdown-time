import React from "react";
import moment from "moment";

const InputDate = ({ date, setDate }) => {
  // console.log(moment().format("YYYY-MM-DD"));
  return (
    <div className="cFlex2">
      <label>Countdown date</label>
      <br />
      <input
        type="date"
        value={date}
        onChange={({ target }) => setDate(target.value)}
        min={moment().format("YYYY-MM-DD")}
      />
    </div>
  );
};
export default InputDate;
