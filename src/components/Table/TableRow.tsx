import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Button/SvgIcon/Icon";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export type TableRowProps = {
  data: Row;
  callback?: (item: any) => void;
};

export type Row = {
  text: string;
  price: number;
  sum: number;
  id: number;
};

export const TableRow = (props: TableRowProps) => {
  let disabled: boolean = props.data.sum === 1;
  const [isDisabled, setIsDisabled] = useState<boolean>(disabled);
  const [sum, setSum] = useState<number>(props.data.sum);

  const plusItem = (props: any) => {
    let newSum = sum + 1;
    setSum(newSum);
    props.data.sum = newSum;
    props.callback?.(props);
    disabled = props.data.sum === 1;
    setIsDisabled(disabled);
  };
  const minusItem = (props: any) => {
    let newSum = sum - 1;
    setSum(newSum);
    props.data.sum = newSum;
    props.callback?.(props);
    if (newSum === 1) {
      setIsDisabled(true);
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
      </td>
      <td>
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
