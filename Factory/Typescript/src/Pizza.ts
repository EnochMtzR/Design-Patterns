import Cheese from "./Ingredients/Cheese";
import Clams from "./Ingredients/Clams";
import Condiments from "./Ingredients/Condiments";
import Dough from "./Ingredients/Dough";
import Pepperoni from "./Ingredients/Pepperoni";
import Sauce from "./Ingredients/Sauce";
import Veggies from "./Ingredients/Veggies";

export default abstract class Pizza {
  protected _name: string = "Unknown pizza";
  protected dough!: Dough;
  protected sauce!: Sauce;
  protected cheese!: Cheese[];
  protected condiments!: Condiments;
  protected veggies!: Veggies[];
  protected pepperoni!: Pepperoni;
  protected clams!: Clams;

  public abstract prepare(): void;

  bake() {
    console.log("Bake for 25 minutes at 350");
  }

  cut() {
    console.log("Cutting the pizza into diagonal slices");
  }

  box() {
    console.log("Place pizza in official PizzaStore box");
  }

  protected getVeggies() {
    return this.veggies.map((vegetable) => vegetable.getName()).toString();
  }

  protected getCheese() {
    if (this.cheese.length > 1)
      return this.cheese.map((cheese) => cheese.getName()).toString();
    return this.cheese[0].getName();
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
