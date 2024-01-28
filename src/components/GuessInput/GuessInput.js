import React from "react";
import { GAME_STATUS } from "../../constants";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== GAME_STATUS.PLAYING}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-z]{5}"
        title="Your guess must be exactly 5 letters long."
        onChange={(event) => {
          const nextGuess = event.target.value.trim().toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
