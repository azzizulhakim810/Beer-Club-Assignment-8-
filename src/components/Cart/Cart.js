import React from 'react';
import { useState } from 'react';
import logo2 from '../../images/beer-svgrepo-com.svg';
import Break from '../Break/Break';
import './Cart.css';

const Cart = (props) => {
  const {cart} = props;
  // console.log(props.cart);
  // console.log(cart);


const taxAmount = [10, 15, 20, 25, 30];
const [taxes, setTaxes] = useState(0);

const taxFunction = (showTaxAmount) => {
  setTaxes(showTaxAmount);
}

  let price = 0;

  for(const product of cart) {
    price = product.attenuation_level + price;
    ;
    console.log(product);
  }

  const modalShowUp = () => {
    alert('Purchase Complete');
  }
  

  return (
    <div className='sticky-sidebar'>
      
      <div>
      <div className="personal-info">
      <img src={logo2} alt="" />
      <h1>AH JIM</h1>
      <p>Dhaka, Bangladesh</p>
      </div>
      
      <div className="tax-amount">
        <h1>Add Tax</h1>
        <div className="tax-btn">
          {taxAmount.map((singleTax,i) => (
            <Break
            taxFunction = {taxFunction}
            singleTax = {singleTax}
            key = {i}
            ></Break>
          ))}
        </div>
      </div>

      <div className="total-details">
        <h1>Total Details</h1>
        <p>Selected Items: {props.cart.length}</p>
        <p>Beer Price: $<span>{price}</span></p>
        <p>Tax Amount: $<span>{taxes}</span></p>
      </div>

      <div className="complete-btn">
        <button onClick={() => modalShowUp()}>Complete Purchase</button>
      </div>
      </div>


    </div>
  );
};

export default Cart;