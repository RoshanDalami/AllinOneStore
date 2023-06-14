import classes from "./Items.module.css";
import Card from "./Card";
import PRODUCT_DETAILS from "../data/Data";
const Items = () => {
  return (
    <div className={classes.container}>
      {PRODUCT_DETAILS.map((item) => {
        return (
          <Card
          id={item.id}
            image={item.image}
            key={item.id}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default Items;
