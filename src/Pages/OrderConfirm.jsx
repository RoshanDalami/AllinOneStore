import React from 'react';
import { Link } from 'react-router-dom';
import classes from './OrderConfirm.module.css';

const OrderConfirm = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
            <h2>
                Your order has been place . 
                <Link className={classes.link} to={'/products'}>
                    Continue Shopping...
                </Link>
            </h2>
      </div>
    </div>
  )
}

export default OrderConfirm
