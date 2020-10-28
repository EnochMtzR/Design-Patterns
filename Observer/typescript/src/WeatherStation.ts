import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";
import { StatisticsDisplay } from "./StatisticsDisplay";
import { WeatherData } from "./WeatherData";

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
const statisticsDisplay = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);