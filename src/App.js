import React from "react";
import useWordGame from "./hooks/useWordGame";
import "./App.css";

function App() {
  const {
    text,
    handleTextChange,
    isTimeRunning,
    textRef,
    time,
    startGame,
    wordCount,
  } = useWordGame(60);

  return (
    <>
      <h1>Speed Typing Game</h1>
      <textarea
        name="text"
        placeholder="Type Here..."
        value={text}
        onChange={handleTextChange}
        disabled={!isTimeRunning}
        ref={textRef}
      />
      <h2 id="time">Time Remaining: {time}</h2>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h2 id="word-count">Word Count: {wordCount} words/min</h2>
    </>
  );
}

export default App;
