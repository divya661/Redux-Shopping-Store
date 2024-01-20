import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  
  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id))
  };
  const incrementCartItem = ()=>{
    dispatch(cartActions.addToCart({id,name,price}));
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <article>Total ${total}</article>
      <button onClick={decrementCartItem} className="cart-actions">
        -
      </button>
      <p>{quantity}</p>
      <button onClick={incrementCartItem} className="cart-actions">
        +
      </button>
    </div>
  );
};

export default CartItem;
