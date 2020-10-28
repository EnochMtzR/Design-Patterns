namespace Observer
{
    public class CurrentConditionsDisplay: IDisplayElement, IObserver
    {
        private float temperature;
        private float humidity;
        private float pressure;
        private ISubject _weatherData;

        public CurrentConditionsDisplay(ISubject weatherData)
        {
            _weatherData = weatherData;
            _weatherData.registerObserver(this);
        }


        public void display()
        {
            System.Console.WriteLine($@"Current conditions: {
              temperature } F degrees, {
              humidity } % humidty and {
              pressure } in pressure.");
        }

        public void update(float temperature, float humidity, float pressure)
        {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            display();
        }
    }
}