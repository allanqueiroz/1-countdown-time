import React from "react";
import * as moment from "moment";
import "moment/locale/pt-br";
import { FaRegTrashAlt } from "react-icons/fa";
import ShowTimerTo from "./showTimerTo";

const ShowEvents = ({ listEvents }) => {
  const handleDelete = (id) => {
    alert(`deletou o evento, cujo o id é ${id}`);
  };
  return (
    <div className="show-events">
      <h2>MEUS EVENTOS</h2>
      <ul>
        {listEvents.map((item) => (
          <li key={item.id}>
            <div className="name-date-components">
              <span>
                {item.eName} - {moment(item.date).format("LL")}
              </span>
              <button
                className="btn-delete"
                onClick={() => handleDelete(item.id)}
              >
                <FaRegTrashAlt size={17} />
              </button>
            </div>
            <ShowTimerTo date={item.date} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowEvents;
