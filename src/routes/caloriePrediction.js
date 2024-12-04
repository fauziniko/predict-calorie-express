const express = require('express');
const { getWeeklyCalories } = require('../services/calorieService');

const router = express.Router();

router.get('/api/calorie-prediction/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const predictedCalories = await getWeeklyCalories(username);
    res.json({ data: { calories: predictedCalories } });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
