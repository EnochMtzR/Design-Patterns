namespace Beverages
{
  public class HouseBlend : Beverage
  {
    public HouseBlend()
    {
      this.description = "House Blend Coffee";
    }

    public override decimal cost()
    {
      return .89m;
    }

  }
}