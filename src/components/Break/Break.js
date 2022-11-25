import React from 'react';
import './Break.css';

const Break = (props) => {
  return (
    <div className='tax-amounts'>
      <button onClick={() => props.taxFunction(props.singleTax)}>{props.singleTax}</button>
    </div>
  );
};

export default Break;