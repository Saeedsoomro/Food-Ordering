import React, { Fragment, useEffect, useState } from "react";
import { Alert } from 'react-alert'
import "./ProductDetails.css";
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";

import axios from 'axios';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ReviewCard from "./ReviewCard";


const ProductDetails = ({ match }) => {

    const [itemDetail , setItemDetail] = useState('')
    const [itemReviews, setItemReciew] = useState('')
    const { id } = useParams();
    useEffect(() => {
      const url = `http://localhost:4000/api/v1/product/${id}`
      axios.get(url)
      .then(data => setItemDetail(data.data.result[0]))
      .catch(error => console.log(error))    
      
      const url2 = `http://localhost:4000/api/v1/review/${id}`
      axios.get(url2)
      .then(data => setItemReciew(data.data.result))
      .catch(error => console.log(error))    
      }, [id]);
    
    
      
   

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (itemDetail.Stock <= quantity){ 
    return;
    }
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity){ 
        return;
    }
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
          // Parse any JSON previously stored in allEntries
    var existingCartItem = JSON.parse(localStorage.getItem("CartItem"));
    if(existingCartItem == null){
      existingCartItem = [];
    }
    var entry = {
      "id": itemDetail.id,
      "name": itemDetail.name,
      "price": itemDetail.price,
      "image": itemDetail.image,
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    existingCartItem.push(entry)    
    // Save allEntries back to local storage
    localStorage.setItem("CartItem", JSON.stringify(existingCartItem));
    alert("Item has been added to cart")
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };


  return (
        
        <>
          <div className="ProductDetails">
            <div>
            <img className="CarouselImage" src={itemDetail.image} alt="nl" />            
            </div>
        
            <div>
              <div className="detailsBlock-1">
                <h2>{itemDetail.name}</h2>        
                <p>Product # {itemDetail.id}</p>
              </div>
              <div className="detailsBlock-3">
                <h1>{`Rs${itemDetail.price}`}</h1>
                <div className="detailsBlock-3-1">  
                  <button
                    disabled={itemDetail.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>
                <p>
                  Status:
                  <b className={itemDetail.Stock < 1 ? "redColor" : "greenColor"}>
                    {itemDetail.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </p>
              </div>

              <div className="detailsBlock-4">
                Description : <p>description</p>
              </div>

              <button onClick={submitReviewToggle} className="submitReview">
                Submit Review
              </button>
            </div>
          </div>

          <h3 className="reviewsHeading">REVIEWS</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              {/* <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button> */}
            </DialogActions>
          </Dialog>

          {itemReviews && itemReviews[0] ? (
            <div className="reviews">
              {
                itemReviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    

export default ProductDetails;