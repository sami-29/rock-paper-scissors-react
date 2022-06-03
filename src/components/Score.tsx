import React from 'react';
import { ScoreProps } from '../types';


const Score: React.FC<ScoreProps> = ({ score }) => {
  return <div className="score-container header__score">
    <h2 className="score-container__text">SCORE</h2>
    <h1 className="score-container__score">{ score.current }</h1>
  </div>;
};

export default Score;
