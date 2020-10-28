using Beverages;

namespace Condiments
{
  public class SteamedMilk : CondimentDecorator
  {
    private Beverage _beverage;

    public SteamedMilk(Beverage beverage)
    {
      _beverage = beverage;
      description = $"{_beverage.description}, Steamed Milk";
    }

    public override decimal cost()
    {
      return .10m + _beverage.cost();
    }
  }
}