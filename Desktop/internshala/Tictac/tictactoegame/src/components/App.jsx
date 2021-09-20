import React, { useState } from "react";
import Board from "./Board";
import Gamelogic from "./Gamelogic";
import History from "./History";
function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isnext: true },
  ]);
  const [currentuser, setcurrentuser] = useState(0);
  const current = history[currentuser];

  const winner = Gamelogic(current.board);
  const msg = winner
    ? `Winner is ${winner}`
    : current.isnext
    ? `Next player is X`
    : `Next player is O`;

  function handleClick(position) {
    if (current.board[position] || winner) return;
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) return last.isnext ? "X" : "O";
        return square;
      });
      return [...prev, { board: newBoard, isnext: !last.isnext }];
    });
    setcurrentuser((prev) => prev + 1);
  }
  function moveto(move) {
    setcurrentuser(move);
  }

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{msg}</h2>

      <Board board={current.board} handleClick={handleClick} />
      <History history={history} moveto={moveto} currentuser={currentuser} />
    </div>
  );
}

export default App;
