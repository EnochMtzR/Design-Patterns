import IDisplayElement from "./IDisplayElement";
import IObserver from "./IObserver";
import ISubject from "./ISubject";

export class CurrentConditionsDisplay implements IDisplayElement, IObserver {
  private temperature = 0.0;
  private humidity = 0.0;
  private pressure = 0.0;
  private _weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this._weatherData = weatherData;
    this._weatherData.registerObserver(this);
  }

  display() {
    console.log(`Current conditions: ${
      this.temperature} F degrees, ${
      this.humidity}% humidity and ${
      this.pressure} pressure.`);
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }
}