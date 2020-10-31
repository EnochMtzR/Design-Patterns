import Pizza from "./Pizza";
import { PizzaTypes } from "./PizzaTypes";

export default abstract class PizzaStore {
  public order(type: PizzaTypes) {
    const pizza = this.createPizza(type);

    console.log(`==================================================\n`);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
  }

  protected abstract createPizza(type: PizzaTypes): Pizza;
}
