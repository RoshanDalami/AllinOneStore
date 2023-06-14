import React,{useContext} from 'react';
import CartContext from '../../Store/Cart-context';
import CartItem from './CartItem';


const Cart = (props) => {
 const cartCtx = useContext(CartContext);
 const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
 const hasItems = cartCtx.items.length > 0;

 const cartItemRemoveHandler = (id)=>{
  cartCtx.removeItem(id);
 }
 const cartItemAddHandler = (item)=>{
  cartCtx.addItem({...item,amount:1});
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




  return (
    <div>
      
      {cartItems}
      <h1 style={{color:'white'}}>{totalAmount}</h1>
    </div>
  )
}

export default Cart;
