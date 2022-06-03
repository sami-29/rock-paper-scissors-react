import React from "react";
import { ActionProps } from "../types";

const AI = () => {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";

    default:
      return "";
  }
};

const Action: React.FC<ActionProps> = ({ type, gameState, setGameState }) => {
  const gotoStep3 = () => {
    if (gameState.step === 2 && gameState.opponentPick === "") {
      setTimeout(() => {
        setGameState({
          step: 3,
          playerPick: type,
          opponentPick: AI(),
          winner: "",
        });
      }, 500);
    }
  };

  gotoStep3();

  const click = () => {
    if (gameState.step === 1) {
      setGameState({
        step: 2,
        playerPick: type,
        opponentPick: "",
        winner: "",
      });
    }
  };

  return (
    <div
      onClick={click}
      className={`action action_${type} action_step_${gameState.step.toString()}`}></div>
  );
};

export default Action;
