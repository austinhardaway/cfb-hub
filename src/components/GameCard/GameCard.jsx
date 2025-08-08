import React from 'react';
import './GameCard.css';

const GameCard = ({ game }) => {
  

  return (
    <div className="game-card">
      <div className="game-card-header">

        <img className="game-card-logo" src={`/logos/${game.awayId}.png`} alt={`${game.awayTeam} logo`} />
        @
        <img className="game-card-logo" src={`/logos/${game.homeId}.png`} alt={`${game.homeTeam} logo`} />

        

      </div>
      <div className="game-card-details">
        <p>{`${new Date(game.startDate).toLocaleTimeString()}`}</p>
      </div>
    </div>
  );
}

export default GameCard;