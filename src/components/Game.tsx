import React from 'react';
import Action from './Action'
import { GameProps } from '../types';


const Game: React.FC<GameProps> = ({ gameState, setGameState, score }) =>
{

  const checkWinner = () => {
    if (gameState.playerPick === gameState.opponentPick) {
      return 'TIED'
    }
    const wincondition = [
      ['rock', 'scissors'],
      ['scissors', 'paper'],
      ['paper', 'rock']
    ]

    for (let i of wincondition) {
      if (i[0] === gameState.playerPick && i[1] === gameState.opponentPick) {
        return 'WON'
      }
    }
    return 'LOST'
  }

  const handleScore = (winMsg:string,prevScore: number) => {
    winMsg === 'WON'? score.current = prevScore +1 : score.current = prevScore-1
  }

  const renderStep = () => {
    const step1 = <>
      <Action {...{
        type: 'rock',
        gameState: gameState,
        setGameState: setGameState
      }}></Action>
      <Action {...{
        type: 'paper',
        gameState: gameState,
        setGameState: setGameState}}></Action>
      <Action {...{
        type: 'scissors',
        gameState: gameState,
          setGameState: setGameState
        }}></Action></>
    const step2 = <>
      <Action {...{
          type: gameState.playerPick,
          gameState: {
            step: 2,
            playerPick: gameState.playerPick,
            opponentPick: gameState.opponentPick,
            winner: gameState.winner
          },
          setGameState: setGameState
        }}></Action>
        <div className="game-container__text-1"><h1>YOU PICKED</h1></div>
    </> 
    const step3 = <><Action {...{
          type: gameState.opponentPick,
          gameState: {
            step: 3,
            playerPick: gameState.playerPick,
            opponentPick: gameState.opponentPick,
            winner: gameState.winner
          },
          setGameState: setGameState
        }}></Action>
        <div className="game-container__text-2"><h1>THE HOUSE PICKED</h1></div></>

  switch (gameState.step) {
    case 1:

      return <div className="game-container game-container_step_1">
      {step1}
    </div> ;
  
    case 2:
      return <div className="game-container game-container_step_2">{step2}</div>
    case 3:
      const winner = checkWinner()
      if (winner !== 'TIED') handleScore(winner, score.current)
      
        setGameState({
          step: 4,
          playerPick: gameState.playerPick,
          opponentPick: gameState.opponentPick,
          winner: winner
        })
      
      return <div className="game-container game-container_step_2">
        {step2}
        {step3}
      </div>
    case 4:
      
      return <div className="game-container game-container_step_2">
        {step2}
        {step3}
        <div className="showdown"><h1>YOU { gameState.winner}</h1></div>
        <button onClick={()=>setGameState({
          step: 1,
          playerPick: '',
          opponentPick: '',
          winner: ''
        })}
          className="play-again">PLAY AGAIN</button>
      </div>
    
    default:
      return <div></div>
      
  }
  }
  return renderStep()
}

export default Game;
