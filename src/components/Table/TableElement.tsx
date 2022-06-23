import { useState } from "react";
import { useDispatch } from "react-redux";
import { Item } from "../../store/item.response";
import { changeItemSum } from "../../store/list.actions";
import { Button } from "../Button/Button";
import { Icon } from "../Button/SvgIcon/Icon";

export type TableElementProps = {
  data: Element;
  callback?: (item: any) => void;
};

export type Element = {
  text: string;
  price: number;
  sum: number;
  id: number;
};

export const TableElement = (props: TableElementProps) => {
  const dispatch=useDispatch();
  const [isDisabled, setIsDisabled] = useState<boolean>((props.data.sum === 1));
  const [sum, setSum] = useState<number>(props.data.sum);

  const plusItem = (props: TableElementProps) => {
    setSum(sum+1);
    let item=props.data;
    item.sum=sum+1;
    dispatch(changeItemSum(item as Item))
    if (((sum+1) === 1)!== isDisabled) {
      setIsDisabled((sum+1) === 1);
    } 
  };
  const minusItem = (props: TableElementProps) => {
    setSum(sum - 1);
    let item=props.data;
    item.sum=sum-1;
    dispatch(changeItemSum(item as Item))
    if (((sum-1) === 1)!== isDisabled) {
      setIsDisabled((sum-1) === 1);
    } 
  };
  
  return (
    <>
      <td>{props.data.text}</td>
      <td>{sum}</td>
      <td>{props.data.price} р.</td>
      <td>
        <Button
          icon={Icon.Plus}
          onClick={() => {
            plusItem(props);
          }}
        />
        <Button
          icon={Icon.Minus}
          onClick={() => {
            minusItem(props);
          }}
          disabled={isDisabled}
        />
      </td>
    </>
  );
};
