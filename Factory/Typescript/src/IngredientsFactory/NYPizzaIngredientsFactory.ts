import Garlic from "../Ingredients/Condiments/Garlic";
import IPizzaIngredientsFactory from "../IPizzaIngredientsFactory";
import MarinaraSauce from "../Ingredients/Sauce/MarinaraSauce";
import Mushrooms from "../Ingredients/Veggies/Mushrooms";
import Onions from "../Ingredients/Veggies/Onions";
import RedPeppers from "../Ingredients/Veggies/RedPeppers";
import ReggianoCheese from "../Ingredients/Cheese/ReggianoCheese";
import SlicedPepperoni from "../Ingredients/Pepperoni/SlicedPepperoni";
import ThinCrustDough from "../Ingredients/Dough/ThinCrustDough";
import Veggies from "../Ingredients/Veggies";
import FreshClams from "../Ingredients/Clams/FreshClams";

export default class NYPizzaIngredientsFactory
  implements IPizzaIngredientsFactory {
  createDough() {
    return new ThinCrustDough();
  }

  createSauce() {
    return new MarinaraSauce();
  }

  createCheese() {
    return [new ReggianoCheese()];
  }

  createCondiments() {
    return new Garlic();
  }

  createVeggies(): Veggies[] {
    return [new Mushrooms(), new Onions(), new RedPeppers()];
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FreshClams();
  }
}
