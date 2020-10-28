namespace Beverages
{
  public class DarkRoast : Beverage
  {
    public DarkRoast()
    {
      this.description = "Dark Roast Coffee";
    }

    public override decimal cost()
    {
      return .99m;
    }
  }
}