import React from 'react';
import { RulesStateContainerProps } from '../types';


const RulesStateContainer:React.FC<RulesStateContainerProps> = ({setAppState}) => {
    return <div className="rules-state-container">
          <h1 className="rules-state-container__header">RULES</h1>
          <div className="rules-state-container__rules-img"></div>
          <button onClick={()=> setAppState('game')} className="rules-state-container__close"></button>
        </div>;
};

export default RulesStateContainer;
