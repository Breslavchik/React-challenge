import { Row } from "../components/Table/TableRow";

export const findAmount = (array: Row[]) => {
    let amount = array.reduce(function (sum, elem) {
      let result = elem.price * elem.sum;
      return sum + result;
    }, 0);
    return amount;
  };