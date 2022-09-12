import { useContext } from "react";

import MealItemForm from "./ItemForm";
import classes from "./lItem.module.css";
import CartContext from "../../../store/cart-context";
import AuthContext from "../../../store/auth-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      amount: amount,
      price: props.price,
    });
  };
  const islog = (amount) => {
    if (!authCtx.isLoggedIn) {
      alert("u Should logIn First");
    } else {
      addToCartHandler(amount);
    }
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={islog} />
      </div>
    </li>
  );
};

export default MealItem;
