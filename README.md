# predict-calorie-express

- node src/app.js

GET http://localhost:3000/api/calorie-prediction/<username>

docker build -t express-calorie-predictor .

docker run -d -p 3001:3001 --name calorie-predictor express-calorie-predictor

docker logs calorie-predictor

docker stop calorie-predictor
docker rm calorie-predictor
