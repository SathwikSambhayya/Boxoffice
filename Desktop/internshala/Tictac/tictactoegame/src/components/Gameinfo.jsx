import React from "react";

const Gameinfo = ({ winner, current }) => {
  const nomoveleft = current.board.every((ele) => ele !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}

      {!winner && !nomoveleft && `Next player is ${current.isnext ? "X" : "O"}`}

      {!winner && nomoveleft && `X and O tied`}
    </h2>
  );
};

export default Gameinfo;
