import React from 'react';
import Score from './Score';
import Game from './Game';
import { GameStateContainerProps } from '../types';

const GameStateContainer:React.FC<GameStateContainerProps> = ({ScoreProps,GameProps,setAppState}) => {
  return <div className="game-state-container">
        <header className="header">
            <div className="title header__title">
                <h1 className="title__text">ROCK</h1>
                <h1 className="title__text">PAPER</h1>
                <h1 className="title__text">SCISSORS</h1>
            </div>

            <Score {...ScoreProps} />
        </header>

        <Game {...GameProps} />
        
        <button onClick={()=> setAppState('rules')} className="rules">RULES</button>
    </div>;
};

export default GameStateContainer;
