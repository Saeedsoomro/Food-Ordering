import React, { Fragment, useState } from "react";
import "./cart.css";
import CartItemCard from "./CartItemCard.js";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


const Cart = ({ history }) => {
    // const alert = useAlert()
    var cartItem = JSON.parse(localStorage.getItem("CartItem"));
    const [cartItems, setCartItems] = useState(cartItem);
  
  const deleteCartItems = (id) => {
    var existingCartItem = JSON.parse(localStorage.getItem("CartItem"));

    // Save allEntries back to local storage
    var  newCartItem = existingCartItem.filter(data => data.id != id)
    localStorage.setItem("CartItem", JSON.stringify(newCartItem));
    setCartItems(newCartItem)
    alert('item has been removed !')
  };

  const checkoutHandler = () => {
    history.push("/shipping");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <Typography>No items in Your Cart</Typography>
          <Link to="/dishes">View Dishes</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p></p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput">
                   
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price 
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.price,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <Link to='/checkout'><button>Check Out</button></Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;