import { useState } from "react";
import { Button } from "../Button/Button";
import { DeleteButton } from "../Button/DeleteButton";
import { Icon } from "../Button/SvgIcon/Icon";
import { SvgIcon } from "../Button/SvgIcon/SvgIcon";
import { Row, TableRow } from "./TableRow";

export type TableProps = {
  name: string;
  data: Row[];
};


export const Table = (props: TableProps) => {
  const [tableData, setTableData] = useState<Row[]>(props.data);

  let findAmount = (array: Row[]) => {
    let amount=array.reduce(function (sum, elem) {
      let result = elem.price * elem.sum;
      return sum + result;
    }, 0);
    return amount;
  };

  const [amount, setAmount] = useState<number>(findAmount(props.data));

  const deleteItem = (elem: Row) => {
    const newTableData = tableData.filter((item) => item != elem);
    setTableData(newTableData);
    // let findAmount = newTableData.reduce(function (sum, elem) {
    //   let result = elem.price * elem.sum;
    //   return sum + result;
    // }, 0);
    setAmount(findAmount(newTableData));
  };

  const findAmountAfterChange=()=>{
    setAmount(findAmount(tableData));
  }

  return (
    <>
      <table>
        <caption>{props.name}</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Наименование товара</th>
            <th>Кол-во</th>
            <th>Цена за шт.</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((elem) => (
            <tr>
              <td>{tableData.indexOf(elem) + 1}</td>
              <TableRow data={elem} callback={findAmountAfterChange}/>
              <td>
                <Button
                  icon={Icon.Delete}
                  onClick={() => {
                    deleteItem(elem);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1> ИТОГО: {amount} р. </h1>
    </>
  );
};
