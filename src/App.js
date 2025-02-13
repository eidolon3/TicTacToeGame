import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <>
      <button class="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XTurn, setXTurn] = useState(true);
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (XTurn ? "X" : "O");
  }
  function handleClick(i) {
    const nextSquares = squares.slice();

    if (nextSquares[i]) {
      return;
    } else if (XTurn) {
      nextSquares[i] = "X";
      setSquares(nextSquares);
      setXTurn(!XTurn);
    } else {
      nextSquares[i] = "O";
      setSquares(nextSquares);
      setXTurn(!XTurn);
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  }

  function Clear() {
    setSquares(Array(9).fill(null));
    setXTurn(true);
  }
  return (
    <>
      <div className="status">{status}</div>

      <button className="clear" onClick={() => Clear()}>
        Clear
      </button>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
