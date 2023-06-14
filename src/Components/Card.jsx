import { useContext, useState } from "react";
import classes from "./Card.module.css";
import CartContext from "../Store/Cart-context";

const Card = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
     cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      amount: amount,
    });
    
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = 1;
    if (enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }
    addToCartHandler(enteredAmount);
  };

  return (
    <>
      <div className={classes.container}>
        <img className={classes.image} src={props.image} />
        <div className={classes.overlay}>
          <div className={classes.titleAndPriceWrapper}>
            <h1 className={classes.title}>
            {props.title}
            </h1>
            <p className={classes.price}>
            {price}
            </p>
          </div>
          <div className={classes.btnContainer}>
            <button className={classes.btn} onClick={onSubmitHandler}>
              Add to card
            </button>
            {!amountIsValid && alert("Please Enter valid Amount")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
