import Cheese from "./Ingredients/Cheese";
import Clams from "./Ingredients/Clams";
import Condiments from "./Ingredients/Condiments";
import Dough from "./Ingredients/Dough";
import Pepperoni from "./Ingredients/Pepperoni";
import Sauce from "./Ingredients/Sauce";
import Veggies from "./Ingredients/Veggies";

export default interface IPizzaIngredientsFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese[];
  createCondiments(): Condiments;
  createVeggies(): Veggies[];
  createPepperoni(): Pepperoni;
  createClam(): Clams;
}
