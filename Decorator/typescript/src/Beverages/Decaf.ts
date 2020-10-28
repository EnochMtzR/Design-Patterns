import Beverage from "./Beverage";

export default class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf";
  }

  cost() {
    return 1.05;
  }
}
