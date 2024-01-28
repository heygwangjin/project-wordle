import React from "react";
import { GAME_STATUS } from "../../constants";
import Banner from "../Banner/Banner";

function LostBanner({ answer }) {
  return (
    <Banner status={GAME_STATUS.LOST}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
