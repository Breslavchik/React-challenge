import { useState } from "react";

export type TableProps = {
name:string;
data:TableRow[]
}

export type TableRow = {
    text:string;
    price:number;
    sum:number;
}

export const Table = (props:TableProps) => {
const [tableData, setTableData]=useState<TableRow[]>(props.data);
const numberItem:number[]  = (tableData.map((item)=>{
    const newItem = item.sum;
    return newItem;
})    
);
const [itemSum, setItemSum]=useState<number[]>(numberItem)

const startAmount=tableData.reduce(function(sum, elem){
    let result=elem.price*elem.sum;
    return sum+result
},0);

const [amount, setAmount]=useState(startAmount);
   return (
       <>
       <table>
           <caption>{props.name}</caption>
       <thead >
            <tr>
              <th>#</th>
              <th>Наименование товара</th>
              <th>Кол-во</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {tableData.map((elem)=>(
                <tr>
                <td>{tableData.indexOf(elem)}</td>
                <td>{elem.text}</td>
                {itemSum.map((item)=>(
                <td>{item} </td>
                ))                   
                }
                <td>{elem.price} р.</td>
                </tr>
              ))              
              }
            
            </tbody>
       </table>
       <h1>ИТОГО: {amount} р.</h1>
       </>
   );

};