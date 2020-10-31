import NYPizzaIngredientsFactory from "../IngredientsFactory/NYPizzaIngredientsFactory";
import Pizza from "../Pizza";
import CheesePizza from "../Pizzas/CheesePizza";
import ClamPizza from "../Pizzas/ClamPizza";
import PepperoniPizza from "../Pizzas/PepperoniPizza";
import VeggiePizza from "../Pizzas/VeggiePizza";
import PizzaStore from "../PizzaStore";
import { PizzaTypes } from "../PizzaTypes";

export default class NYPizzaStore extends PizzaStore {
  private _pizzaIngredientFactory = new NYPizzaIngredientsFactory();

  protected createPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;
    switch (type) {
      case PizzaTypes.Cheese:
        pizza = new CheesePizza(this._pizzaIngredientFactory);
        pizza.name = "New York Cheese Pizza";
        break;
      case PizzaTypes.Veggie:
        pizza = new VeggiePizza(this._pizzaIngredientFactory);
        pizza.name = "New York Veggie Pizza";
        break;
      case PizzaTypes.Clam:
        pizza = new ClamPizza(this._pizzaIngredientFactory);
        pizza.name = "New York Clam Pizza";
        break;
      case PizzaTypes.Pepperoni:
        pizza = new PepperoniPizza(this._pizzaIngredientFactory);
        pizza.name = "New York Pepperoni Pizza";
    }

    return pizza;
  }
}
