import { Icon } from "./SvgIcon/Icon";
import { SvgIcon } from "./SvgIcon/SvgIcon";

export type ButtonProps = {
    icon:Icon;
    callback:(item:any)=>void;        
    }


  export const DeleteButton = (props: ButtonProps) => {
    
    function onDeleteClick(item: any) {
        return props.callback?.(item);
      };

    return (
       <button onClick={()=>{onDeleteClick}}>
                <SvgIcon icon={props.icon}/>
                    </button>
    )
  };