import React, { useEffect, useState } from 'react';
import { gamesByWeek } from '../../services/cfbd.service';

const useHomeData = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchGames = async () => {
        setLoading(true);
        try {
            const res = await gamesByWeek(1)
            console.log('Games fetched:', res);
            setGames(res);
        } catch (error) {
            console.error('Failed to fetch games:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGames();        
    }, []);

    return { games, loading };
}

export default useHomeData;