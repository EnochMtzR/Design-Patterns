import MozzarellaCheese from "../Ingredients/Cheese/MozzarellaCheese";
import ParmesanCheese from "../Ingredients/Cheese/ParmesanCheese";
import FrozenClams from "../Ingredients/Clams/FrozenClams";
import ThickCrustDough from "../Ingredients/Dough/ThickCrustDough";
import SlicedPepperoni from "../Ingredients/Pepperoni/SlicedPepperoni";
import PlumTomatoSauce from "../Ingredients/Sauce/PlumTomatoSauce";
import BlackOlives from "../Ingredients/Veggies/BlackOlives";
import Eggplant from "../Ingredients/Veggies/Eggplant";
import Oregano from "../Ingredients/Condiments/Oregano";
import Spinach from "../Ingredients/Veggies/Spinach";
import IPizzaIngredientsFactory from "../IPizzaIngredientsFactory";
import Veggies from "../Ingredients/Veggies";
import Condiments from "../Ingredients/Condiments";

export default class ChicagoPizzaIngredientsFactory
  implements IPizzaIngredientsFactory {
  createDough() {
    return new ThickCrustDough();
  }

  createSauce() {
    return new PlumTomatoSauce();
  }

  createCheese() {
    return [new MozzarellaCheese(), new ParmesanCheese()];
  }

  createVeggies(): Veggies[] {
    return [new Eggplant(), new Spinach(), new BlackOlives()];
  }

  createCondiments(): Condiments {
    return new Oregano();
  }

  createPepperoni() {
    return new SlicedPepperoni();
  }

  createClam() {
    return new FrozenClams();
  }
}
