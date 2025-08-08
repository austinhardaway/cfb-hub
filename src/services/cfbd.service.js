const BASE_URL = 'http://localhost:5000/api'; // Use your backend server URL


export const gamesByWeek = async (
    week, 
    year = new Date().getFullYear(),
    seasonType = 'regular',
    conference = null,
    classification = 'fbs',
    team = null,
    home = null,
    away = null,
) => {
    const params = new URLSearchParams({
        year,
        week,
        seasonType,
        classification,
    });

    if(import.meta.env.VITE_USE_MOCK_DATA) {
        console.info('USE_MOCK_DATA is enabled, using mock data for gamesByWeek');
        return import('./mockData/gamesByWeek').then(module => module.mockGamesByWeek()).then(res => res)
    }
    const response = await fetch(`${BASE_URL}/games?${params.toString()}`);

    if (!response.ok) {
        throw new Error(`Error fetching games: ${response.statusText}`);
    }

    return response.json();
}