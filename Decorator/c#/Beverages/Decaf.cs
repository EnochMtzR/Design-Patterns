namespace Beverages
{
  public class Decaf : Beverage
  {
    public Decaf()
    {
      this.description = "Decaf";
    }

    public override decimal cost()
    {
      return 1.05m;
    }
  }
}