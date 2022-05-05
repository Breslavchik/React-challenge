import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Button/SvgIcon/Icon";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { Row, TableRow } from "./TableRow";
import './Table.scss';
import { findAmount } from "../../helpers.ts/math";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store/store";
import { ListState } from "../../store/list.reducer";
import { changeFinalCost, changeListItem } from "../../store/list.actions";

export type TableProps = {
  name: string;
  data: Row[];
};

export const Table = (props: TableProps) => {
  const dispatch = useDispatch();

  const { itemList, finalCost } = useSelector(
    (state: AppState) => state.ListState as ListState
  );
  const [hidden, setHidden] = useState<boolean>(true);
  const [idForDelete, setIdForDelete] = useState<number>(0);

  const openModal = (id: number) => {
    setHidden(false);
    setIdForDelete(id);
  };

  // const [amount, setAmount] = useState<number>(findAmount(props.data));

  const deleteItem = (elem: number) => {
    const newTableData = itemList?.filter((item) => item.id !== elem);
    dispatch(changeListItem(newTableData!));
    setHidden(true);
  };


  useEffect(()=>{
    dispatch(changeFinalCost(findAmount(itemList!)));
  }, [itemList, finalCost]);

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
          {itemList?.map((elem) => (
            <tr key={elem.id}>
              <td>{itemList.indexOf(elem) + 1}</td>
              <TableRow data={elem} callback={()=>{ dispatch(changeFinalCost(findAmount(itemList)))}} />
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
      <h1 className="table-footer"> ИТОГО: {finalCost} р. </h1>
    </>
  );
};
