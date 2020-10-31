import ChicagoPizzaIngredientsFactory from "../IngredientsFactory/ChicagoPizzaIngredientsFactory";
import Pizza from "../Pizza";
import CheesePizza from "../Pizzas/CheesePizza";
import ClamPizza from "../Pizzas/ClamPizza";
import PepperoniPizza from "../Pizzas/PepperoniPizza";
import VeggiePizza from "../Pizzas/VeggiePizza";
import PizzaStore from "../PizzaStore";
import { PizzaTypes } from "../PizzaTypes";

export default class ChicagoPizzaStore extends PizzaStore {
  private _pizzaIngredientFactory = new ChicagoPizzaIngredientsFactory();

  protected createPizza(type: PizzaTypes): Pizza {
    let pizza: Pizza;
    switch (type) {
      case PizzaTypes.Cheese:
        pizza = new CheesePizza(this._pizzaIngredientFactory);
        pizza.name = "Chicago Cheese Pizza";
        break;
      case PizzaTypes.Veggie:
        pizza = new VeggiePizza(this._pizzaIngredientFactory);
        pizza.name = "Chicago Veggie Pizza";
        break;
      case PizzaTypes.Clam:
        pizza = new ClamPizza(this._pizzaIngredientFactory);
        pizza.name = "Chicago Clam Pizza";
        break;
      case PizzaTypes.Pepperoni:
        pizza = new PepperoniPizza(this._pizzaIngredientFactory);
        pizza.name = "Chicago Pepperoni Pizza";
    }

    return pizza;
  }
}
