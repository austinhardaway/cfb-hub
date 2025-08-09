import React from 'react';
import './Home.css';  
import useHomeData from './useHomeData';
import GameCard from '../../components/GameCard/GameCard';
import GameSlate from '../../components/GameSlate/GameSlate';


const Home = () => {

    const {games, loading} = useHomeData();

    return (
        <div className="home">
           {!loading && games.length > 0 && 
                <GameSlate title={'Week 1'} games={games} />
           }
        </div>
    );
}

export default Home;