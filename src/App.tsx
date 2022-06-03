import React, {useState, useRef} from 'react';
import GameStateContainer from './components/GameStateContainer';
import RulesStateContainer from './components/RulesStateContainer';
import { GameState } from './types';


const App:React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    step: 1,
    playerPick: '',
    opponentPick: '',
    winner: ''
  })
  const [appState, setAppState] = useState('game')

  const scoreRef = useRef(0)
  const ScoreProps = {
    score: scoreRef
  }
  const GameProps = {
    gameState: gameState,
    setGameState: setGameState,
    score: scoreRef,
  }

  const render = () => appState === 'game' ?
        <GameStateContainer {...{
          ScoreProps: ScoreProps,
          GameProps: GameProps,
          setAppState: setAppState
        }} />
        :
        <RulesStateContainer {...{
          setAppState: setAppState
    }} /> 
  
  return (
    <div className="App">
      {render()}
      
    </div>
  );
}

export default App;
