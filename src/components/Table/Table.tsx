import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Button/SvgIcon/Icon";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Row, TableRow } from "./TableRow";
import './Table.scss';

export type TableProps = {
  name: string;
  data: Row[];
};

export const Table = (props: TableProps) => {
  const [tableData, setTableData] = useState<Row[]>(props.data);
  const [hidden, setHidden] = useState<boolean>(true);
  const [idForDelete, setIdForDelete] = useState<number>(0);

  const openModal = (id: number) => {
    setHidden(false);
    setIdForDelete(id);
  };

  let findAmount = (array: Row[]) => {
    let amount = array.reduce(function (sum, elem) {
      let result = elem.price * elem.sum;
      return sum + result;
    }, 0);
    return amount;
  };
  const [amount, setAmount] = useState<number>(findAmount(props.data));

  const deleteItem = (elem: number) => {
    const newTableData = tableData.filter((item) => item.id !== elem);
    setTableData(newTableData);
    setHidden(true);
  };


  useEffect(()=>{
    setAmount(findAmount(tableData));
  }, [tableData, amount]);

  return (
    <>
      <table className="table">
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
            <tr key={elem.id}>
              <td>{tableData.indexOf(elem) + 1}</td>
              <TableRow data={elem} callback={()=>{ setAmount(findAmount(tableData))}} />
              <td><Button
                  icon={Icon.Delete}
                  onClick={() => {
                    openModal(elem.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalWindow
        hidden={hidden}
        onClick={() => {
          deleteItem(idForDelete);
        }}
        onClose={() => setHidden(true)}
      />
      <h1 className="table-footer"> ИТОГО: {amount} р. </h1>
    </>
  );
};
