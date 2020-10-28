using System;
using System.Collections.Generic;
using System.Linq;

namespace Observer
{
    public class StatisticsDisplay: IDisplayElement, IObserver
    {
        private List<float> temperatureHistory;
        private ISubject _weatherData;

        public StatisticsDisplay(ISubject weatherData)
        {
          temperatureHistory = new List<float>();
          _weatherData = weatherData;
          _weatherData.registerObserver(this);
        }

        public void display()
        {
          System.Console.WriteLine($@"Avg/Max/Min temperature = {
            temperatureHistory.Average().ToString("n2") }/{
            temperatureHistory.Max().ToString("n2") }/{
            temperatureHistory.Min().ToString("n2") }");
        }

        public void update(float temperature, float humidity, float pressure)
        {
          temperatureHistory.Add(temperature);
          display();
        }
    }
}