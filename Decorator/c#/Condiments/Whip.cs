using Beverages;

namespace Condiments
{
  public class Whip : CondimentDecorator
  {
    private Beverage _beverage;

    public Whip(Beverage beverage)
    {
      _beverage = beverage;
      description = $"{_beverage.description}, Whip";
    }

    public override decimal cost()
    {
      return .10m + _beverage.cost();
    }
  }
}