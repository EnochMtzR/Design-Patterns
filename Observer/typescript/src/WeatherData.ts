import IObserver from "./IObserver";
import ISubject from "./ISubject";

export class WeatherData implements ISubject {
  private observers: IObserver[] = [];
  private temperature = 0.0;
  private humidity = 0.0;
  private pressure = 0.0;

  public measurementsChanged() {
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public registerObserver(observer: IObserver) {
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver) {
    const index = this.observers.indexOf(observer);
    if(index >= 0)
    {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers() {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  //Other Methods...
}