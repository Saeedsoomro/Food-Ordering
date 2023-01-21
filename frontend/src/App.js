import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home.js';
import Footer from './components/footer/footer.js';
import Dishes from './components/dishes/dishes';
import Contact from './components/contact/contact';
import About from './components/about/about';
import ProductDetails from './components/product/ProductDetails';
import LoginSignUp from './components/user/LoginSignUp';
import Cart from './components/cart/cart';
import Shipping from './components/cart/checkout';
import Checkout from './components/cart/checkout';
import Order from './components/cart/order';
// import Services from './components/services/Services.js'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/dishes' element={<Dishes/>} /> 
          <Route path='/contact' element={<Contact/>} /> 
          <Route path='/about' element={<About/>} /> 
          <Route exact path="/product/:id" element={<ProductDetails/>} /> 
          <Route path='/login' element={<LoginSignUp/>} /> 
          <Route path='/cart' element={<Cart/>} /> 
          <Route path='/checkout' element={<Checkout/>} /> 
          <Route path='/order' element={<Order/>} /> 
        </Routes>         
        <Footer/>
       
        
      </Router>
    
        
        
    </>
  );
}
  

//   <Router>
//   {/* <Navbar/>
//    <Home/>

//   <Footer/>
// <Route exact path="/" component={Home} /> */}
// <Router/>

export default App;
