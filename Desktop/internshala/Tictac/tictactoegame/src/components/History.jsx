import React from "react";

const History = ({ history, moveto, currentuser }) => {
  return history.map((_, index) => {
    return (
      <button
        style={{ fontWeight: index === currentuser ? "bold" : "normal" }}
        type="button"
        onClick={() => {
          moveto(index);
        }}
      >
        <li key={index}>
          {index == 0 ? "GO to game start" : `Go to ${index}`}
        </li>
      </button>
    );
  });
};

export default History;
