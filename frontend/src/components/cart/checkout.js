import React, { Fragment, useState } from "react";
import "./Shipping.css";
import axios from 'axios';
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PhoneIcon from "@material-ui/icons/Phone";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useNavigate } from 'react-router-dom';
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";

const Checkout = () => {


  const navigate = useNavigate();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [paymenType, setPaymentType] = useState();
  const [amount, setAmount] = useState();
  const [accountNo, setAccountNo] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [cartItems, setcartItems] = useState([]);

  const user = JSON.parse(localStorage.getItem('id'));
  const cartItem = JSON.parse(localStorage.getItem('CartItem'));
  const total = 0;
//   cartItems.map((item)=>{
//     total = total+item.price
//   })
  console.log(total)
  
  const shippingSubmit = (e) => {
    e.preventDefault();
 
    setcartItems(cartItem)
    console.log(cartItem)
    cartItem.map((item)=>{
      console.log(item)
      axios.post('http://localhost:4000/api/v1/order', {
        userId: user.id,
        productId: item.id,
        productName: item.name,
        amount: item.price,
      })
      .then(data => console.log("payment succesfull"))
      .catch(error => console.log(error))
    }) 
    
    axios.post('http://localhost:4000/api/v1/shipping', {
        address: address,
        city: city,
        phone: phoneNo,
      })
      .then(data => console.log(data.data))
      .catch(error => console.log(error))
    axios.post('http://localhost:4000/api/v1/payment', {
        paymentType: "jazz cash",
        amount: amount,
        accountNo: accountNo,
        user_id: user.id,
      })
      .then(data => console.log("payment succesfull"))
      .catch(error => console.log(error))
    
    const array = [];
    localStorage.setItem("CartItem", JSON.stringify(array))
    navigate('/order');
  };

  return (
    <Fragment>

      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Shipping Details</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>
            
            <div>
            <select
                required
                value={state}
                onChange={(e) => setPaymentType(e.target.value)}
                >
                  <option value="">Select payment methode</option>
                  <option value="">Jazz Cash</option>
                  <option value="">Easy Piasa</option>
                  <option value="">Bank</option>

                </select>
            </div>
            <div>
              <AttachMoneyIcon/>
              <input
                type="number"
                placeholder={`₹${cartItems.reduce(
                    (acc, item) => acc + item.price,
                    0
                  )}`}
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                size="10"
              />
            </div>
            <div>
              <AccountBalanceIcon/>
              <input
                type="number"
                placeholder="Account number"
                required
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
                size="10"
              />
            </div>


            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;