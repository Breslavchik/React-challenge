import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Button/SvgIcon/Icon";

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
  const [isDisabled, setIsDisabled] = useState<boolean>((props.data.sum === 1));
  const [sum, setSum] = useState<number>(props.data.sum);

  const plusItem = (props: any) => {
    props.data.sum = sum + 1;
    setSum(props.data.sum);
    setIsDisabled(props.data.sum === 1);
    props.callback?.(props);
  };
  const minusItem = (props: any) => {
    props.data.sum = sum - 1;
    setSum(props.data.sum);
    setIsDisabled(props.data.sum === 1);
    props.callback?.(props);
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
