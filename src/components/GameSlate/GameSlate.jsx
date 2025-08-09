import React from 'react';
import GameCard from '../GameCard/GameCard';
import './GameSlate.css';


const GameSlate = ({ games, title }) => {
    return (
        <div className="game-slate">
            <h2 className="slate-title">{title}</h2>
            <div className="game-slate-games">
                {games.map((game, index) => (
                    <GameCard key={`${title}-${index}-${game.id}`} game={game} />
                ))}
            </div>
        </div>
    );
}

export default GameSlate;