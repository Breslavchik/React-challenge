import "./App.scss";
import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";

const productList = [
  {
    text: "Букварь",
    price: 500,
    sum: 1,
    id: 1,
  },
  {
    text: "Бубен",
    price: 1500,
    sum: 12,
    id: 2,
  },
  {
    text: "Мартовский заяц",
    price: 1000,
    sum: 10,
    id: 3,
  },
  {
    text: "Шляпа",
    price: 300,
    sum: 5,
    id: 4,
  },
];

function App() {
  return (
    <>
    <div className="common-conteiner">
      <Header />
      <Table name="Детали заказа одного безумца" data={productList} />
      </div>
    </>
  );
}

export default App;
