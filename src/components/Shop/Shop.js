import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect( () => {
    fetch ('fakedata.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='shop-contianer'>
      <div className='products-container'>

        {
          products.map(product => <Product
          key = {product.id}
          product = {product}
          handleAddToCart={handleAddToCart}
          ></Product>)
        }

    </div>

    <div className='cart-container p-4'>

      <Cart
      cart = {cart}
      ></Cart>

    </div>
    </div>
  );
};

export default Shop;