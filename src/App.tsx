import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Table } from './components/Table/Table';

const productList = [
  {
    text:'Букварь',
    price:500,
    sum:1,
  },
  {
    text:'Бубен',
    price:1500,
    sum:12,
  },
  {
    text:'Мартовский заяц',
    price:1000,
    sum:10
  },
  {
    text:'Шляпа',
    price:300,
    sum:5,
  },
]

function App() {
  return (
    <>
    <Header />
    <Table name='Детали заказа одного безумца' data={productList}/>
    </>
  );
}

export default App;
