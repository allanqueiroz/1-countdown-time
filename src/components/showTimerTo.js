import React from "react";

const ShowTimerTo = ({ date }) => {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");
  const dataInfo = new Date(`${date} 00:00:00`).getTime();

  React.useEffect(() => {
    setInterval(function () {
      let now = new Date().getTime();
      let distance = dataInfo - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    // if (distance < 0) {
    //   clearInterval(s);
    //   alert("O tempo até o evento expirou!");
    // }
  });
  return (
    <>
      <span className="lm">{`${days} dias ${hours}h ${minutes}m ${seconds}s`}</span>
    </>
  );
};

export default ShowTimerTo;
