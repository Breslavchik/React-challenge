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


  const plusItem = (props: any) => {
    props.data.sum = props.data.sum + 1;
    setIsDisabled(props.data.sum === 1);
    props.callback?.(props);
  };

  const minusItem = (props: any) => {
    props.data.sum = props.data.sum - 1;
    setIsDisabled(props.data.sum === 1);
    props.callback?.(props);
  };

  return (
    <>
      <td>{props.data.text}</td>
      <td>{props.data.sum}</td>
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
