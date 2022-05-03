import { Icon } from "./SvgIcon/Icon";
import { SvgIcon } from "./SvgIcon/SvgIcon";

export type ButtonProps = {
  icon?: Icon;
  text?: string;
  onClick?: (item: any) => void;
  disabled?: boolean;
};

export const Button = (props: ButtonProps) => {
  let buttonImg;

  if (props.icon) {
    buttonImg = <SvgIcon icon={props.icon} />;
  }
  return (
    <>
      <button onClick={props.onClick} disabled={props.disabled}>
        {buttonImg}
        {props.text}
      </button>
    </>
  );
};
