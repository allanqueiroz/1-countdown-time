import React from "react";
// import moment from "moment";
import * as moment from "moment";
import "moment/locale/pt-br";

const ShowEvents = ({ listEvents }) => {
  return (
    <div>
      <h2>MEUS EVENTOS</h2>
      <ul>
        {listEvents.map((item) => (
          <li key={item.eName}>
            <span>
              {item.eName} - {moment(item.date).format("LL")}
            </span>
            <button>DELETAR</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowEvents;
