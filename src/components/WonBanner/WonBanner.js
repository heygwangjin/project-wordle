import React from "react";
import { GAME_STATUS } from "../../constants";
import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status={GAME_STATUS.WON}>
      <p>
        <strong>Congratulations! </strong>
        Got it in
        {"  "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
