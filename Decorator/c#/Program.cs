using Beverages;
using Condiments;

namespace Decorator
{
  class CoffeeShop
  {
    static void Main(string[] args)
    {
      Beverage beverage = new Espresso();
      beverage.display();

      Beverage beverage2 = new DarkRoast();
      beverage2 = new Mocha(beverage2);
      beverage2 = new Mocha(beverage2);
      beverage2 = new Whip(beverage2);
      beverage2.display();

      Beverage beverage3 = new HouseBlend();
      beverage3 = new Soy(beverage3);
      beverage3 = new Mocha(beverage3);
      beverage3 = new Whip(beverage3);
      beverage3.display();
    }
  }
}
