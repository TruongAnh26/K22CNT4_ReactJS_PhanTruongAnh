import './App.css';
import PtaProductList from './components/PtaProductList';
import PtaAddProduct from './components/PtaAddProduct';
import { useState } from 'react';
function App() {
  const [listProducts, setListProducts] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
  ]); 
  
  const ptaOnSubmit = (product) => {
    setListProducts([...listProducts, product]);
  }
  return (
    <div className="container rounded-1 ">
      <h1 className='text-center'>CRUD by Hook</h1>
      <PtaProductList listProducts={listProducts} />
      <PtaAddProduct ptaOnSubmit={ptaOnSubmit} />
    </div>
  );
}

export default App;
