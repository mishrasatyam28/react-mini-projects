import React, { useState } from "react";
import "./style.css";
import data from "./data";
// single selection
// multiple selection

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelected, setEnableMultiSelected] = useState(false);
  const [multiple, setMutiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    // console.log(getcurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);
    setMutiple(cpyMutiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelected(!enableMultiSelected)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelected
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
// 21
