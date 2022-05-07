import { Element } from "../components/Table/TableElement";

export const calcTotalAmount = (array: Element[]) => {
    let amount = array.reduce(function (sum, elem) {
      let result = elem.price * elem.sum;
      return sum + result;
    }, 0);
    return amount;
  };