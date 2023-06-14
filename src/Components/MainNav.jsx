import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
import CartContext from "../Store/Cart-context";
import CartIcon from "./Cart/CartIcon";





const MainNav = () => {
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((curNumber,item)=>{
    return curNumber + item.amount ;
  },0);
  // const numberOfCartItems = items.reduce()
  return (
    <>
      <div className={classes.container}>
      <Link className={classes.brand} to={'/'}>All in One</Link>
        <div className={classes.wrapper}>
          <nav className={classes.route}>
            <NavLink className={classes.item}to={'/'}>Home</NavLink>

            <NavLink className={classes.item} to={'/products'}>Products</NavLink>
          </nav>
          <div >
            <NavLink to={'/cart'} className={classes.btn}>
              <div className={classes.icon}>
              <CartIcon /> 
              </div>
              <span>Your Cart</span>
              <span style={{backgroundColor:'white',borderRadius:'50%',color:'black',paddingLeft:5, paddingRight:5,marginLeft:5 }}>{numberOfCartItems}</span>  
           
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
