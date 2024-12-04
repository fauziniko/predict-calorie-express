const axios = require('axios');

const backendUrl = 'https://cc-workspace-586910673966.asia-southeast2.run.app';

async function getWeeklyCalories(username) {
  const apiUrl = `${backendUrl}/api/dashboard/${username}/weekly-calories`;

  const response = await axios.get(apiUrl);
  const { data } = response.data;
  const { calories } = data;

  if (!calories || !Array.isArray(calories) || calories.length === 0) {
    throw new Error('Invalid or missing calorie data');
  }

  const totalCalories = calories.reduce((acc, cal) => acc + cal, 0);
  return Math.round(totalCalories / calories.length);
}

module.exports = { getWeeklyCalories };
