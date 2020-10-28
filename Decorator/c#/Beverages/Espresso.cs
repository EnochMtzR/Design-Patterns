namespace Beverages
{
  public class Espresso : Beverage
  {
    public Espresso()
    {
      this.description = "Espresso";
    }

    public override decimal cost()
    {
      return 1.99m;
    }
  }
}