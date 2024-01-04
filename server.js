import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

//modified to send a short description aswellas name of icon to render on frontend

const getWeatherData = async (city) => {
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.API_KEY}`;
  try {
    const response = await fetch(weatherURL);
    const weatherData = await response.json();
    console.log(weatherData);
    return {
      temp: weatherData.main.temp,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon,
    };
  } catch (error) {
    console.log("Error fetching weather data:", error);
    throw error;
  }
};

app.post("/api/getWeather", async (req, res) => {
  try {
    const { cities } = req.body;
    let weatherResults = {};
    for (let city of cities) {
      const tempData = await getWeatherData(city);
      weatherResults[city] = tempData;
    }
    res.status(200).json({ weather: weatherResults });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`listening on ${port} !`));
