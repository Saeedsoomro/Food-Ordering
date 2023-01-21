import React from 'react'
import './order.css'
import { Link } from "react-router-dom";


const Order = () => {
  return (
    <div className="emptyCart">
        <h1>Order has been successfully placed</h1>
        <h3>We will contact you soon </h3>
        <Link to="/">Go to home</Link>
    </div>
  )
}

export default Order


