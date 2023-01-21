import React from 'react'
import {
  Link
} from "react-router-dom";
import './productcard.css'
const Productcard = ({product}) => {
  
  return (
    <Link className="productCard" to={`/product/${product.id}`}>
      <div className="popular">

      <div class="box">
            <img src={product.image} alt=""/>
            <h3>{product.name}</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>Rs{product.price}</span>
            <a href="#" class="btn">add to cart</a>
        </div>
      </div>
        </Link>
  )
}

export default Productcard