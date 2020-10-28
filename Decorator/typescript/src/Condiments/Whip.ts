import { Beverage } from "../Beverages";
import CondimentDecorator from "./CondimentDecorator";

export class Whip extends CondimentDecorator {
  private _beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this._beverage = beverage;
    this.description = `${this._beverage.description}, Whip`;
  }

  cost() {
    return 0.1 + this._beverage.cost();
  }
}
