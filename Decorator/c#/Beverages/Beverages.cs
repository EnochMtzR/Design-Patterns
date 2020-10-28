using System;

namespace Beverages
{
  public abstract class Beverage
  {
    public string description = "Unknown beverage";

    public void display()
    {
      Console.WriteLine($"{this.description} ${this.cost()}");
    }

    public abstract decimal cost();
  }
}