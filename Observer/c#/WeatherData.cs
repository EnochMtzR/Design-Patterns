using System.Collections.Generic;

namespace Observer
{
  public class WeatherData: ISubject
  {
    private List<IObserver> observers = new List<IObserver>();
    private float temperature;
    private float humidity;
    private float pressure;

    public void registerObserver(IObserver observer)
    {
      observers.Add(observer);
    }

    public void removeObserver(IObserver observer)
    {
      observers.Remove(observer);
    }

    public void notifyObservers()
    {
      observers.ForEach(observer => observer.update(temperature, humidity, pressure));
    }

    public void measurementsChanged()
    {
      notifyObservers();
    }

    public void setMeasurements(float temperature, float humidity, float pressure)
    {
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
      measurementsChanged();
    }

    //other methods...
  }
}