import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";
import { Item } from "./store/item.response";
import { setListItem } from "./store/list.actions";
import { ListState } from "./store/list.reducer";

const productList = [
  {
    text: "Письменный стол",
    price: 5000,
    sum: 1,
    id: 1,
  },
  {
    text: "Ворон",
    price: 2000,
    sum: 1,
    id: 2,
  },
  {
    text: "Бубен",
    price: 1500,
    sum: 12,
    id: 3,
  },
  {
    text: "Мартовский заяц",
    price: 1000,
    sum: 10,
    id: 4,
  },
  {
    text: "Шляпа",
    price: 300,
    sum: 5,
    id: 5,
  },
];

export const getListItem = (dispatch: Dispatch<any>) => {
  productList as Item[];
  dispatch(setListItem(productList));
};

function App() {

  const dispatch = useDispatch();

  const {itemList} = useSelector(
    (state: ListState) => state 
  );

  useEffect(() => {
    getListItem(dispatch);
  }, [itemList]);

  return (
    <>
      <body>
        <div className="common-conteiner">
          <Header />
          <Table name="Детали заказа одного безумца" data={itemList!} />
        </div>
      </body>
    </>
  );
}

export default App;
