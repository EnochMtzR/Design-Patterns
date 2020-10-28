using Beverages;

namespace Condiments
{
  public class Mocha : CondimentDecorator
  {
    private Beverage _beverage;

    public Mocha(Beverage beverage)
    {
      _beverage = beverage;
      description = $"{_beverage.description}, Mocha";
    }

    public override decimal cost()
    {
      return .20m + _beverage.cost();
    }
  }
}