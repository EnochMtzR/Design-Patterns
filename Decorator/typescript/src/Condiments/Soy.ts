import { Beverage } from "../Beverages";
import CondimentDecorator from "./CondimentDecorator";

export class Soy extends CondimentDecorator {
  private _beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this._beverage = beverage;
    this.description = `${this._beverage.description}, Soy`;
  }

  cost() {
    return 0.15 + this._beverage.cost();
  }
}
