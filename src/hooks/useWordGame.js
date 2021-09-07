import { useState, useEffect, useRef } from "react";

function useWordGame(startingTime = 10) {
  const [text, setText] = useState("");
  const [time, setTime] = useState(startingTime);
  const [wordCount, setWordCount] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const textRef = useRef(null);

  const handleTextChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const startGame = () => {
    setText("");
    setWordCount(0);
    setTime(startingTime);
    setIsTimeRunning(true);
    textRef.current.disabled = false;
    textRef.current.focus();
  };

  const countWords = (text) => {
    let words = text.split(" ").filter((word) => word !== "").length;
    return words;
  };

  useEffect(() => {
    if (time > 0 && isTimeRunning) {
      setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsTimeRunning(false);
      setWordCount(countWords(text));
    }
  }, [time, isTimeRunning]);

  return {
    text,
    handleTextChange,
    isTimeRunning,
    textRef,
    time,
    startGame,
    wordCount,
  };
}

export default useWordGame;
