import React from 'react';
import './Product.css';

const Product = (props) => {
  const {name, description, image_url, attenuation_level} = props.product;
  const {handleAddToCart} = props;
//  console.log(props);

  
  return (
    <div>
      
      <div>

      <div className='card-deck m-2'>
      <div className='card total_card p-2'>

      <img className='product_image card-img-top' src={image_url} alt='Card image cap'></img>

      <div className='card-body'>
      <h5 className='card-title font-weight-bold'>{name}</h5>
      <p className='card-text'>{description.slice(0,100)}</p>
      <p className='card-text'>Price: ${attenuation_level}</p>
    </div>
    <div className='btn'>
      <button onClick={() => handleAddToCart(props.product)} className='card-btn'>Add to list</button>
    </div>
    </div>
    </div>

    </div>
    </div>
  );
};

export default Product;