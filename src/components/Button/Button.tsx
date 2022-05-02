import { Icon } from "./SvgIcon/Icon";
import { SvgIcon } from "./SvgIcon/SvgIcon";

export type ButtonProps = {
    icon: Icon;
    callback?: (item: any) => void;        
    }


  export const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.callback}>
    <SvgIcon icon={props.icon}/>
        </button>
    )
  };