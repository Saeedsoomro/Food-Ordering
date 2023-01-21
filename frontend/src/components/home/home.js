
import React, {useEffect, useState, useRef} from 'react'
import './home.css'
import axios from 'axios';
import Productcard from '../product/productcard';
import { motion } from "framer-motion"
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide  } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
// import EmojiFoodBeveragIcon from "@material-ui/icons/EmojiFoodBeverag";


const products = [
  {
    name: "Pizza",
    image: "./images/home-img-2.png",
    price:12,
    popular:true
  },
  {
    name: "Pizza",
    image: "./images/home-img-2.png",
    price:12,
    popular:true
  },
  {
    name: "Pizza",
    image: "./images/home-img-2.png",
    price:12,
    popular:true
  },
  {
    name: "Burger",
    image: "./images/home-img-2.png",
    price:12,
    popular:true
  },
  {
    name: "Burger",
    image: "./images/home-img-2.png",
    price:12,
    popular:true
  },
  {
    name: "Burger",
    image: "./images/home-img-2.png",
    price:12,
    popular:true
  },
  {
    name: "Burger",
    image: "./images/home-img-2.png",
    price:12,
    popular:true
  },
  
  
  

  
];



const Home =() =>{
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [totalProduct, setTotalProduct] = useState(0);
  const [data, setData] = useState([]);
  const getCustomersData = (() => {
    axios.get("http://localhost:4000/api/v1/products")
    .then(data => setData(data.data.result))
    .catch(error => console.log(error));
    });
 
    
    getCustomersData();
    
  useEffect(() => {
    const popularProducts = data.filter(
      (item) => item.popular === 'true'
    );
    if (category === "ALL") {
      setAllProducts(popularProducts);
      console.log(popularProducts)
    }

    if (category === "BURGER") {
      const filteredProducts = popularProducts.filter(
        (item) => item.name === "burger"
      );
      setAllProducts(filteredProducts);
      
    }

    if (category === "PIZZA") {
      const filteredProducts = popularProducts.filter(
        (item) => item.name === "pizza"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = popularProducts.filter(
        (item) => item.name === "bread"
      );
      setAllProducts(filteredProducts);
      
    }
  }, [category]);

  return (
  <>
  <div className="home">
  <Swiper className='.home-slider'
    spaceBetween={50}
    slidesPerView={1}
    loop={true}
    autoplay={{
        delay: 5000,
        disableOnInteraction: false
    }}
    onSwiper={(swiper) => console.log(swiper)}
    modules={[Autoplay, Pagination, Navigation]}
  >
    <SwiperSlide className='h-slide'>
    <div class="slide">
        <div class="content">
          <span>our special dish</span>
          <h3>spicy noodles</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
           <a href="#" class="btn">order now</a>
        </div>
        <div class="image">
        <div className="w-right">
        <motion.div
          whileHover={{rotate:360}}
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src="./images/home-img-1.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="./images/home-img-2.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="./images/home-img-3.png" alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src="./images/home-img-1.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="./images/home-img-2.png" alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
      </div>
        </div>
  </SwiperSlide>
    <SwiperSlide>
    <div class="swiper-slide slide">
                <div class="content">
                    <span>our special dish</span>
                    <h3>fried chicken</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                    <a href="#" class="btn">order now</a>
                </div>
                <div class="image">
                  <div className="w-right">
                      <motion.div
                        whileHover={{rotate:360}}
                        initial={{ rotate: 45 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ margin: "-40px" }}
                        transition={{ duration: 3.5, type: "spring" }}
                        className="w-mainCircle"
                      >
                        <div className="w-secCircle">
                          <img src="./images/home-img-1.png" alt="" />
                        </div>
                        <div className="w-secCircle">
                          <img src="./images/home-img-2.png" alt="" />
                        </div>
                        <div className="w-secCircle">
                          <img src="./images/home-img-3.png" alt="" />
                        </div>{" "}
                        <div className="w-secCircle">
                          <img src="./images/home-img-1.png" alt="" />
                        </div>
                        <div className="w-secCircle">
                          <img src="./images/home-img-2.png" alt="" />
                        </div>
                      </motion.div>
                      {/* background Circles */}
                      <div className="w-backCircle blueCircle"></div>
                      <div className="w-backCircle yellowCircle"></div>
                    </div> 
                </div>
            </div>
    </SwiperSlide>
    <SwiperSlide>
    <div class="swiper-slide slide">
                <motion.div 
                 initial={{x:"100vh"}}
                 animate={{x:0}}
                 transition={{type:"spring", delay:0.5 }}
                className="content">
                    <span>our special dish</span>
                    <h3>hot pizza</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                    <a href="#" class="btn">order now</a>
                </motion.div>
                <div class="image">
                 <div className="w-right">
                      <motion.div
                       whileHover={{rotate:360}}
                        initial={{ rotate: 45 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ margin: "-40px" }}
                        transition={{ duration: 3.5, type: "spring" }}
                        className="w-mainCircle"
                      >
                        <div className="w-secCircle">
                          <img src="./images/home-img-1.png" alt="" />
                        </div>
                        <div className="w-secCircle">
                          <img src="./images/home-img-2.png" alt="" />
                        </div>
                        <div className="w-secCircle">
                          <img src="./images/home-img-3.png" alt="" />
                        </div>{" "}
                        <div className="w-secCircle">
                          <img src="./images/home-img-1.png" alt="" />
                        </div>
                        <div className="w-secCircle">
                          <img src="./images/home-img-2.png" alt="" />
                        </div>
                      </motion.div>
                      {/* background Circles */}
                      <div className="w-backCircle blueCircle"></div>
                      <div className="w-backCircle yellowCircle"></div>
                    </div>
                </div>
            </div>
    </SwiperSlide>
  </Swiper>
  </div>
  <section
      // initial={{x:"10rem"}}
      // whileInView={{x:0}}
      // viewport={{ margin: "-40px" }}
      // transition={{ duration: 1, type: "spring" }}
  className="h-container">
    <motion.div 
      whileHover={{ y:"-2rem"}}
      transition={{type: "spring"}}
      className='card'>
      <motion.p style={{color:'var(--green)'}}
      whileHover={{scale:1.2}}
      ><LocalPizzaIcon/></motion.p>
      <p>Lorem ipsum dolor, sit amet consectetur</p>
    </motion.div>
    <motion.div 
      whileHover={{ y:"-2rem"}}
      transition={{ type: "spring" }}
      className='card'>
      <motion.p
      whileHover={{scale:1.2}}
      style={{color:'var(--green)'}}
      ><FastfoodIcon/></motion.p>
      <p>Lorem ipsum dolor, sit amet consectetur</p>
    </motion.div>
    <motion.div 
      whileHover={{ y:"-2rem"}}
      transition={{ type: "spring" }}
      className='card'>
      <motion.p
      whileHover={{scale:1.2}}
      style={{color:'var(--green)'}}
      ><ChildFriendlyIcon/></motion.p>
      <p>Lorem ipsum dolor, sit amet consectetur</p>
    </motion.div>
  </section>
  <section className='s-container'>
    <div className="disc-box">
      <h3>What we serve</h3>
      <h1>Just sit back at home </h1>
      <h1> we will <span>take care</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, explicabo.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, explicabo.</p>
    </div>
    <div className="services-box">
        <div className="box">
          <img src="https://image.shutterstock.com/image-vector/food-delivery-man-riding-green-600w-1839100543.jpg" alt="not display" />
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="box">
          <img src="https://image.shutterstock.com/image-vector/food-delivery-man-riding-green-600w-1839100543.jpg" alt="not display" />
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="box">
          <img src="https://image.shutterstock.com/image-vector/food-delivery-man-riding-green-600w-1839100543.jpg" alt="not display" />
          <p>Lorem, ipsum dolor.</p>
        </div>
        
    </div>
  </section>
   <section className='popular'>
    <h1>Popular food</h1>
    <div className="bar">
      <button className= {category === "ALL" ? "foodBtnActive" : ""} onClick={() => setCategory("ALL")}>ALL</button>
      <button className= {category === "BURGER" ? "foodBtnActive" : ""} onClick={() => setCategory("BURGER")} >Burger</button>
      <button className= {category === "PIZZA" ? "foodBtnActive" : ""}  onClick={() => setCategory("PIZZA")}>Pizza</button>
      <button className= {category === "BREAD" ? "foodBtnActive" : ""} onClick={() => setCategory("BREAD")} >Bread</button>
    </div>
    <div className="products">
            {totalProduct < 8 &&
              allProducts.map((product, index) => {
                    return ( <Productcard key={index} product={product} /> )    
              }      
            )}
          </div>
   </section>
   {/* why us */}
   <section className='whyUs'>
      <img className='whyUSImg' src='https://cdn.pixabay.com/photo/2018/02/26/21/05/local-3184036_960_720.png' alt="#" />
      <div className='right'>
        <h2 className='whyusHeading'> Why <span>Us</span></h2>
        <p className="choose__us-desc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum, minus. Tempora reprehenderit a corporis velit,
            laboriosam vitae ullam, repellat illo sequi odio esse iste
            fugiat dolor, optio incidunt eligendi deleniti!
          </p>
          <p className=" choose__us-title ">
               Fresh and tasty foods
          </p>
          <p className="choose__us-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quia, voluptatibus.
          </p>
                  
          <p className="choose__us-title ">
                 Quality support
          </p>
          <p className="choose__us-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Qui, earum.
          </p>
          <p className="choose__us-title ">
              Order from any location{" "}
           </p>
            <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
            </p>
      </div>
   </section>
   <section className="Testimonials">
    <h1 className='testimonialh1'>Testimonials</h1>
    <div className="testimialContainer">
    <div className='left'>
       <h1>what our customers are saying</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, similique dolore? Eaque unde impedit laboriosam accusamus, debitis consequatur minima accusantium animi consequuntur reiciendis inventore illo</p>
          <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false
          }}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="Testimonialcard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem quas fuga ducimus officia dolorum doloremque eligendi commodi laborum, aliquid explicabo voluptatibus, distinctio vero</p>
                <div className="imgSection">
                      <img src="./images/Profile.png" alt="3" />
                      <p>Usama</p>
                </div>
              </div>
            </SwiperSlide>
          <SwiperSlide>
            <div className="Testimonialcard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem quas fuga ducimus officia dolorum doloremque eligendi commodi laborum, aliquid explicabo voluptatibus, distinctio vero</p>
                <div className="imgSection">
                      <img src="./images/Profile.png" alt="3" />
                      <p>Taha</p>
                </div>
              </div>
            </SwiperSlide>
          <SwiperSlide>
            <div className="Testimonialcard">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem quas fuga ducimus officia dolorum doloremque eligendi commodi laborum, aliquid explicabo voluptatibus, distinctio vero</p>
                <div className="imgSection">
                      <img src="./images/Profile.png" alt="3" />
                      <p>Daniyal</p>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
           
    </div>
    <div className='right'>
        <img src="https://cdn.pixabay.com/photo/2017/02/25/23/52/connections-2099068_960_720.png" alt="#" />
    </div>
    </div>
   </section>
  </>
  )
}

export default Home