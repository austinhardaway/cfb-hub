import React from 'react';
import './Home.css';  
import useHomeData from './useHomeData';
import GameCard from '../../components/GameCard/GameCard';


const Home = () => {

    const {games, loading} = useHomeData();

    return (
        <div className="home">
           {/* {!loading && games.length > 0 && 
                <GameCard game={games[0]} />
           } */}
           {games.length>0 && games.map((game, index) => (
                <GameCard key={index} game={game} />
           ))}
        </div>
    );
}

export default Home;