import IPizzaIngredientsFactory from "../IPizzaIngredientsFactory";
import Pizza from "../Pizza";

export default class PepperoniPizza extends Pizza {
  _pizzaIngredientsFactory: IPizzaIngredientsFactory;

  constructor(pizzaIngredientsFactory: IPizzaIngredientsFactory) {
    super();
    this._pizzaIngredientsFactory = pizzaIngredientsFactory;
    this.getIngredients();
  }

  public prepare() {
    console.log(`Preparing ${this._name}`);
    console.log(`\tdough: ${this.dough.getName()}`);
    console.log(`\tsauce: ${this.sauce.getName()}`);
    console.log(`\tcheese: ${this.getCheese()}`);
    console.log(`\tveggies: ${this.getVeggies()}`);
    console.log(`\tpepperoni: ${this.pepperoni.getName()}`);
  }

  private getIngredients() {
    this.dough = this._pizzaIngredientsFactory.createDough();
    this.sauce = this._pizzaIngredientsFactory.createSauce();
    this.cheese = this._pizzaIngredientsFactory.createCheese();
    this.veggies = this._pizzaIngredientsFactory.createVeggies();
    this.pepperoni = this._pizzaIngredientsFactory.createPepperoni();
  }
}
