import Veggies from "../Ingredients/Veggies";
import IPizzaIngredientsFactory from "../IPizzaIngredientsFactory";
import Pizza from "../Pizza";

export default class VeggiePizza extends Pizza {
  _pizzaIngredientsFactory: IPizzaIngredientsFactory;

  constructor(pizzaIngredientsFactory: IPizzaIngredientsFactory) {
    super();
    this._pizzaIngredientsFactory = pizzaIngredientsFactory;
    this.getIngredients();
  }

  prepare() {
    console.log(`Preparing ${this._name}`);
    console.log(`\tdough: ${this.dough.getName()}`);
    console.log(`\tsauce: ${this.sauce.getName()}`);
    console.log(`\tcheese: ${this.getCheese()}`);
    console.log(`\tveggies: ${this.getVeggies()}`);
  }

  private getIngredients() {
    this.dough = this._pizzaIngredientsFactory.createDough();
    this.sauce = this._pizzaIngredientsFactory.createSauce();
    this.cheese = this._pizzaIngredientsFactory.createCheese();
    this.veggies = this._pizzaIngredientsFactory.createVeggies();
  }
}
