import "./App.scss";
import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";

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
    sum: 10,
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
    price: 3000,
    sum: 2,
    id: 5,
  },
];

function App() {
  return (
    <>
    <body>
    <div className="common-container">
      <Header />
      <Table name="Детали заказа одного безумца" data={productList} />
      </div>
      </body>
    </>
  );
}

export default App;
