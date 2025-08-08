import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = 5000;

const CFBD_API_KEY = process.env.CFBD_API_KEY;
const BASE_URL = 'https://api.collegefootballdata.com';

app.use(cors());

app.get('/api/games', async (req, res) => {
  try {
    const params = new URLSearchParams(req.query);
    const response = await fetch(`${BASE_URL}/games?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${CFBD_API_KEY}`,
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: response.statusText });
    }

    const data = await response.json();
    console.log('Games fetched:', data);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});