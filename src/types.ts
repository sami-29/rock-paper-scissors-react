type action = '' | 'rock' | 'paper' | 'scissors'

export interface GameState{
    step: number;
    playerPick: action;
    opponentPick: action;
    winner: string;
}

export interface ActionProps{
    type: action
    gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>
}

export interface GameProps {
  gameState: GameState,
  setGameState: React.Dispatch<React.SetStateAction<GameState>>,
  score: React.MutableRefObject<number>
}

export interface ScoreProps {
  score: React.MutableRefObject<number>,
}

export interface GameStateContainerProps {
  ScoreProps: ScoreProps,
  GameProps: GameProps,
  setAppState: React.Dispatch<React.SetStateAction<string>>
}
export interface RulesStateContainerProps {
  setAppState: React.Dispatch<React.SetStateAction<string>>
}
