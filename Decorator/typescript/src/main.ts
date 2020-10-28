import { DarkRoast, Espresso, HouseBlend } from "./Beverages";
import { Cocoa, Soy, Whip } from "./Condiments";

const beverage  = new Espresso();
beverage.display();

let beverage2 = new DarkRoast();
beverage2 = new Cocoa(beverage2);
beverage2 = new Cocoa(beverage2);
beverage2 = new Whip(beverage2);
beverage2.display();

let beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Cocoa(beverage3);
beverage3 = new Whip(beverage3);
beverage3.display();