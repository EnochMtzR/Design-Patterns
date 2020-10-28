import IDisplayElement from "./IDisplayElement";
import IObserver from "./IObserver";
import ISubject from "./ISubject";

export class StatisticsDisplay implements IDisplayElement, IObserver {
  private temperatureHistory: number[] = [];
  private _weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this._weatherData = weatherData;
    this._weatherData.registerObserver(this);
  }

  display() {
    console.log(`Avg/Max/Min temperature = ${
      this.getAverage().toFixed(2)}/${
      this.getMax().toFixed(2)}/${
      this.getMin().toFixed(2)}`);
  }

  update(temperature: number) {
    this.temperatureHistory.push(temperature);
    this.display();
  }

  getAverage() {
    const sum = this.temperatureHistory.reduce((previous, current) => previous + current);
    return sum / this.temperatureHistory.length;
  }

  getMin() {
    return this.temperatureHistory.reduce((previous, current) => previous > current ? current : previous,
    this.temperatureHistory[0]);
  }

  getMax() {
    return this.temperatureHistory.reduce((previous, current) => previous < current ? current : previous,
    this.temperatureHistory[0]);
  }
}