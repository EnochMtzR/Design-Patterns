import { Beverage } from "../Beverages";
import CondimentDecorator from "./CondimentDecorator";

export class Cocoa extends CondimentDecorator {
  _beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this._beverage = beverage;
    this.description = `${this._beverage.description}, Mocha`;
  }

  cost() {
    return 0.2 + this._beverage.cost();
  }
}
