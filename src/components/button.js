import React from "react";

const BtnModel = ({ name, funcClick, clas }) => {
  return (
    <button onClick={funcClick} className={clas}>
      {name}
    </button>
  );
};

export default BtnModel;
