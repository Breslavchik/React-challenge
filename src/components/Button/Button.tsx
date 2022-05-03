import { Icon } from "./SvgIcon/Icon";
import { SvgIcon } from "./SvgIcon/SvgIcon";

export type ButtonProps = {
  icon: Icon;
  onClick?: (item: any) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button onClick={props.onClick}>
        <SvgIcon icon={props.icon} />
      </button>
    </>
  );
};
