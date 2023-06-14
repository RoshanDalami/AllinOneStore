import React,{useContext} from 'react';
import CartContext from '../../Store/Cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useNavigate } from 'react-router-dom';


const Cart = (props) => {
 const cartCtx = useContext(CartContext);
 const redirect = useNavigate();
 const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
 const hasItems = cartCtx.items.length > 0;

 const cartItemRemoveHandler = (id)=>{
  cartCtx.removeItem(id);
 }
 const cartItemAddHandler = (item)=>{
  cartCtx.addItem({...item,amount:1});
 }
 const goToProducts = ()=>{
  redirect('/products')
 }
 const onOrder = ()=>{
 cartCtx.order()
 redirect('/orderplaced')

 }



 const cartItems = <ul style={{color:'white'}}>
  {cartCtx.items.map((item)=>{
   return <CartItem
    key={item.id}
    title = {item.title}
    price = {item.price}
    amount = {item.amount}
    onRemove = {cartItemRemoveHandler.bind(null,item.id)}
    onAdd= {cartItemAddHandler.bind(null,item)}

    />
  })}
 </ul> 


const btnOrder = `${classes.btn} + ${classes.order} `

  return (
    <div className={classes.container} >
      <div className={classes.wrapper}>
      <h1 style={{color:'white'}}>Cart Items</h1>
      {hasItems ? cartItems : <h2 style={{color:'white',display:'flex',justifyContent:'center'}}>Your Cart is Empty... 
       <br />
       <p onClick={goToProducts} style={{marginLeft:10 , textDecoration:'underline',cursor:'pointer'}} > Go to products</p>
        </h2> }
      <br />
      <br />

      <h1 style={{color:'white', display:'flex', justifyContent:'flex-end'}}> Total Amount : {totalAmount}</h1>
      <div className={classes.btnWrapper}>

      <button onClick={goToProducts} className={classes.btn}>Cancel</button>
    {hasItems &&  <button onClick={onOrder} className={btnOrder}>Order</button>}
      </div>
      </div>
    </div>
  )
}

export default Cart;
