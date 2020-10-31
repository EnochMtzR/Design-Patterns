import { PizzaTypes } from "./PizzaTypes";
import ChicagoPizzaStore from "./Stores/ChicagoPizzaStore";
import NYPizzaStore from "./Stores/NYPizzaStore";

const chicagoStore = new ChicagoPizzaStore();
const newYorkStore = new NYPizzaStore();

chicagoStore.order(PizzaTypes.Cheese);
newYorkStore.order(PizzaTypes.Cheese);

chicagoStore.order(PizzaTypes.Veggie);
newYorkStore.order(PizzaTypes.Veggie);

chicagoStore.order(PizzaTypes.Clam);
newYorkStore.order(PizzaTypes.Clam);

chicagoStore.order(PizzaTypes.Pepperoni);
newYorkStore.order(PizzaTypes.Pepperoni);
