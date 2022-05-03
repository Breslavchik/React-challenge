import { useState } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Button/SvgIcon/Icon";

export type TableRowProps = {
    data:Row
    callback?:(item:any)=>void;
}

export type Row ={
    text:string;
    price:number;
    sum:number;
}

export const TableRow =(props:TableRowProps) => {
    const [sum, setSum]=useState<number>(props.data.sum)
    const plusItem = (props:any)=> {
       let newSum=sum+1;
       setSum(newSum);
       props.data.sum=newSum;
       props.callback?.(props)
    };
    const minusItem = (props:any)=> {
        let newSum=sum-1;
        setSum(newSum);
        props.data.sum=newSum;
        props.callback?.(props)
     };
    return (
        <>
    <td>{props.data.text}</td>
    <td>{sum}</td>
    <td>{props.data.price} р.</td>
    <td><Button icon={Icon.Plus} onClick={()=>{plusItem(props)}}/></td>
    <td><Button icon={Icon.Minus} onClick={()=>{minusItem(props)}}/></td>
    </>
    );
    
};