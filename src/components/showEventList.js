import React from "react";
import * as moment from "moment";
import "moment/locale/pt-br";
import { FaRegTrashAlt } from "react-icons/fa";
import ShowTimerTo from "./showTimerTo";

const ShowEvents = ({ listEvents }) => {
  //   console.log(moment("2021-11-22").fromNow());
  //   console.log(new Date("2021-08-05 12:00:00").getTime());
  return (
    <div>
      <h2>MEUS EVENTOS</h2>
      <ul>
        {listEvents.map((item) => (
          <li key={item.eName}>
            <span>
              {item.eName} - {moment(item.date).format("LL")}
            </span>
            -
            <ShowTimerTo date={item.date} />
            -----
            <button>
              <FaRegTrashAlt size={17} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowEvents;
