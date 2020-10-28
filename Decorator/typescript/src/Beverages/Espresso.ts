import Beverage from "./Beverage";

export default class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost() {
    return 1.99;
  }
}
