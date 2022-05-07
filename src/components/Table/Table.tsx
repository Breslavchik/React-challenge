import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Button/SvgIcon/Icon";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Element, TableElement } from "./TableElement";
import './Table.scss';
import { calcTotalAmount } from "../../helpers/Math";

export type TableProps = {
  name: string;
  data: Element[];
};

export const Table = (props: TableProps) => {

  const [tableData, setTableData] = useState<Element[]>(props.data);
  const [isModalWindowHidden, setIsModalWindowHidden] = useState<boolean>(true);
  const [idForDelete, setIdForDelete] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
 
  useEffect(()=>{
    setAmount(calcTotalAmount(tableData));
  }, [tableData, amount]);

  const openModal = (id: number) => {
    setIsModalWindowHidden(false);
    setIdForDelete(id);
  };

  const deleteItem = (elem: number) => {
    const newTableData = tableData.filter((item) => item.id !== elem);
    setTableData(newTableData);
    setIsModalWindowHidden(true);
  };

  const findTotalAmountAfterItemChange =(elem:Element)=>{
  const newTableData=tableData
  const index=tableData.findIndex(item=>item.id===elem.id);
  newTableData.splice(index, 1, elem);
  setTableData(newTableData);
  setAmount(calcTotalAmount(newTableData));
  }

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
          {tableData.map((elem, index) => (
            <tr key={elem.id}>
              <td>{index + 1}</td>
              <TableElement data={elem} callback={()=>{ findTotalAmountAfterItemChange(elem)}} />
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
        hidden={isModalWindowHidden}
        onClick={() => {
          deleteItem(idForDelete);
        }}
        onClose={() => setIsModalWindowHidden(true)}
      />
      <h1 className="table-footer"> ИТОГО: {amount} р. </h1>
    </>
  );
};
