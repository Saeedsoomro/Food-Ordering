import './dishes.css'
import React, { Fragment, useEffect, useState } from "react";
import Productcard from '../product/productcard';
import axios from 'axios';

const Dishes = () => {
    const [data, setData] = useState('')
    const getCustomersData = () => {
        axios.get("http://localhost:4000/api/v1/products")
        .then(data => setData(data.data.result))
        .catch(error => console.log(error));
        };
       getCustomersData();
        
    //    console.log(data)

    useEffect(() => {
        console.log(data)
        
      },[]);
    
  
    return (
    <Fragment>
    <h2 className="dishesHeading">Dishes</h2>
    <div className="products">
      {data &&
        data.map((product) => (
          <Productcard key={product._id} product={product} />
        ))}
    </div>

    <div className="filterBox">
      {/* <Typography>Price</Typography> */}
      {/* <Slider
        value={price}
        onChange={priceHandler}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={0}
        max={25000}
      /> */}

      {/* <Typography>Categories</Typography>
      <ul className="categoryBox">
        {categories.map((category) => (
          <li
            className="category-link"
            key={category}
            onClick={() => setCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul> */}

      {/* <fieldset>
        <Typography component="legend">Ratings Above</Typography>
        <Slider
          value={ratings}
          onChange={(e, newRating) => {
            setRatings(newRating);
          }}
          aria-labelledby="continuous-slider"
          valueLabelDisplay="auto"
          min={0}
          max={5}
        />
      </fieldset> */}
    </div>
    {/* {resultPerPage < 9 && (
      <div className="paginationBox">
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={productsCount}
          onChange={setCurrentPageNo}
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="1st"
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
          activeClass="pageItemActive"
          activeLinkClass="pageLinkActive"
        />
      </div> 
    )}  */}
  </Fragment>
  )}

export default Dishes