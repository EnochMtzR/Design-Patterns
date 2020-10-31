import IPizzaIngredientsFactory from "../IPizzaIngredientsFactory";
import Pizza from "../Pizza";

export default class CheesePizza extends Pizza {
  private _pizzaIngredientFactory: IPizzaIngredientsFactory;

  constructor(pizzaIngredientFactory: IPizzaIngredientsFactory) {
    super();
    this._pizzaIngredientFactory = pizzaIngredientFactory;
    this.GetIngredients();
  }

  prepare() {
    console.log(`Preparing ${this._name}`);
    console.log(`\tdough: ${this.dough.getName()}`);
    console.log(`\tsauce: ${this.sauce.getName()}`);
    console.log(`\tcheese: ${this.getCheese()}`);
    console.log(`\tcondiments: ${this.condiments.getName()}`);
  }

  private GetIngredients() {
    this.dough = this._pizzaIngredientFactory.createDough();
    this.sauce = this._pizzaIngredientFactory.createSauce();
    this.cheese = this._pizzaIngredientFactory.createCheese();
    this.condiments = this._pizzaIngredientFactory.createCondiments();
  }
}
