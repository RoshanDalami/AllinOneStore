import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
import CartContext from "../Store/Cart-context";


const MainNav = () => {
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((curNumber,item)=>{
    return curNumber + item.amount ;
  },0);
  return (
    <>
      <div className={classes.container}>
      <Link className={classes.brand} to={'/'}>All in One</Link>
        <div className={classes.wrapper}>
          <nav className={classes.route}>
            <NavLink className={classes.item}to={'/'}>Home</NavLink>

            <NavLink className={classes.item} to={'/products'}>Products</NavLink>
          </nav>
          <div className={classes.loginbtn}>
            <NavLink to={'/cart'}>
              <button className={classes.btn}>Cart  <span style={{backgroundColor:'white',borderRadius:'50%',color:'black'}}>{numberOfCartItems}</span>  </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
