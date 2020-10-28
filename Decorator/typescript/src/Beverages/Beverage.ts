export default abstract class Beverage {
  description = "Unknown Beverage";

  public getDescription() {
    return this.description;
  }

  public display() {
    console.log(`${this.description} $${this.cost()}`);
  }

  public abstract cost(): number;
}
