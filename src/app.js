const express = require('express');
const caloriePredictionRoute = require('./routes/caloriePrediction');

const app = express();
const port = 3000;

app.use(express.json());
app.use(caloriePredictionRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
