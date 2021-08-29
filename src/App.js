import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal.js';
import data from './Data.js';

function App() {
  

  const [cartItems, setCartItems] = useState(data);
  console.log(cartItems)
  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
          <CartItems items={cartItems} setCartItems={setCartItems}/>
          <CartTotal items={cartItems}/>
          </div>
     </div> 
  );
}

export default App;

