import React from 'react';
import logo2 from '../../images/beer-svgrepo-com.svg';
import './Cart.css';

const Cart = (props) => {
  console.log(props.cart);
  console.log(props.cart.name);
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
          <button>10</button>
          <button>15</button>
          <button>20</button>
          <button>25</button>
          <button>30</button>
        </div>
      </div>

      <div className="total-details">
        <h1>Total Details</h1>
        <p>Beer Price:$<span></span></p>
        <p>Tax Amount:$<span></span></p>
      </div>

      <div className="complete-btn">
        <button>Complete Purchase</button>
      </div>
      <p>Selected Items:{props.cart.length}</p>
      </div>


    </div>
  );
};

export default Cart;