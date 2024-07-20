import React, { useState } from "react";
import "./App.css";

function calculateWinner(squares){

  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],


    [0,4,8],
    [2,4,6],


  ];

  for(let i = 0; i < winningCombinations.length; i++){
    const [a,b,c] =   winningCombinations[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;

}

function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className="square">
      {value}{" "}
    </button>
  );
}

function Board({xIsNext,squares,onUpdateHistory}) {


  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    //immutability

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    onUpdateHistory(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;

  if(winner){
    status = `Winner: ${winner}`;
  }else{
    status = `Next player turn: ${xIsNext ? 'X' : 'O'}`
  }


  function restartGame(){
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }
  return (
    <>
    <div className="status">{status} </div>
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
      <button onClick={restartGame} >Restart Game</button>
    </>
  );
}

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const[currentMove, setCurrentMove] = useState(0);

  const latestSquares = history[currentMove];

  function updateHistory(nextSquares){
    const nextHistory = [...history.slice(0,currentMove + 1) , nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function goToMove(nextMove){
    //logic
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {

    let desc;

    if(move > 0){
      desc = `Go to move # ${move}`;
    }else{
      desc = `Go to start of the game`;

    }

    return (
      <li key={move}>
        <button onClick={() => goToMove(move)} >{desc}</button>
      </li>
    )

  })

  return (
    <div >
      <div>
      <Board xIsNext={xIsNext} squares={latestSquares} onUpdateHistory={updateHistory} />

      </div>

      <div>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default App;


//History or time feature  where use can move back at any point

// [
//   //before starting
// [null, null, null, null,null, null,null,null, null]

// //1st move 
// [null, null, null, null,null, null,null,null, 'X']

// //2nd move
// [null, null, null, null,'O', null,null,null, 'X']

// ]