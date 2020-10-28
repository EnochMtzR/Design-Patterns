using Beverages;

namespace Condiments
{
  public class Soy : CondimentDecorator
  {
    private Beverage _beverage;

    public Soy(Beverage beverage)
    {
      _beverage = beverage;
      description = $"{_beverage.description}, Soy";
    }

    public override decimal cost()
    {
      return .15m + _beverage.cost();
    }
  }
}