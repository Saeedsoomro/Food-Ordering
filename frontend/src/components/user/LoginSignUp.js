
import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import PhoneIcon from "@material-ui/icons/Phone";

const LoginSignUp = ({ history, location }) => {
  

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData]= useState();
  const [submitt, setSubmitt] = useState(false)
  const [loginData, setLoginData]= useState();
  const [isLogging, setIsLogging] = useState(false)
  const [userId, SetUserId] = useState()
  const [userDetail, setUserDetail] = useState()  
  const [localId, SetLocalId] = useState([])  
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const { name, email, phone, password } = user;
  // useEffect(() => {
  //   const id = JSON.parse(localStorage.getItem('id'));
  //   const url = `http://localhost:4000/api/v1/user/${id}`
  //   axios.get(url)
  //   .then(data => setUserDetail(data.data))
  //   .catch(error => console.log(error))    
  //    console.log(userDetail)     
         
        
  //   }, [localId]);
   



  const loginSubmit = (e) => {
    e.preventDefault();
    setIsLogging(true)
    axios.post('http://localhost:4000/api/v1/login', {
      email: loginEmail,
      password:loginPassword,
    })
    .then(data =>{ 
       setUserDetail(data.data.result[0])
      localStorage.setItem('id', JSON.stringify(data.data.result[0]));
      SetUserId(data.data.id);
      setLoginData(data.data.message);
    })
    .catch(error => setLoginData(''));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('id'));
    if (items) {
     setUserDetail(items)
     console.log(userDetail)
    }
  }, []);
  const registerSubmit = (e) => {
    e.preventDefault();

    setSubmitt(true);
    axios.post('http://localhost:4000/api/v1/register', {
      name: name,
      email: email,
      phone: phone,
      password:password,
    })
    .then(data => setData(data.data))
    .catch(error => setData(''))
    console.log("submit click")
  };

  const registerDataChange = (e) => {
 
      setUser({ ...user, [e.target.name]: e.target.value });
    
  };

  const logout = ()=>{
    setUserDetail('')
    localStorage.removeItem('id')
  }
//   const redirect = location.search ? location.search.split("=")[1] : "/account";



  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <>
        {userDetail ? (<>
          <Fragment>
          
          <div className="profileContainer">
            <div>
              <h1 style={{color:'var(--green)'}}>My Profile</h1>
              <img src='../images/Profile.png' alt="sjsjsj" />
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{userDetail.username}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{userDetail.email}</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>{userDetail.phone}</p>
              </div>

              <div>
                <Link to="/order">My Orders</Link>
               <button onClick={logout}>Log out</button>
          
              </div>
            </div>
          </div>
        </Fragment>
          </>): (<>
            <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
                <p className="WariningTag"   style={  { display: isLogging ? 'block' : 'none',  color: loginData ? 'green' : 'red' } }    > {loginData ? `${loginData}`:'Email or password is incorrect!'} </p>
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPhone">
                  <PhoneIcon />
                  <input
                    type="phone"
                    placeholder="Phone"
                    required
                    name="phone"
                    value={phone}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <input type="submit" value="Register" className="signUpBtn" />
               <p className="WariningTag"   style={  { display: submitt ? 'block' : 'none',  color: data ? 'green' : 'red' } }    > {data ? `${data.message}`:'Registration Failed! '} </p>                 
              </form>
            </div>
          </div>
        </Fragment>
          </>)}
    </>
    
  );
};

export default LoginSignUp;