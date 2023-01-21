import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './navbar.css';
import { motion } from "framer-motion"
import Fastfood from "@material-ui/icons/Fastfood";
import Search from "@material-ui/icons/Search";
import Shop from "@material-ui/icons/Shop";
import AccountBox from "@material-ui/icons/AccountBox";
import Menu from "@material-ui/icons/Menu";

const variants = {
    initial: { opacity: 0, y: "-100vh" },
    closed: { opacity: 1, y: 0 },


  }

  function Navbar() {
    const [ pnav, setPnav] = useState(false)    
   
    
    

    return (
        <header>
            
            <a href="#" class="logo">
                 <motion.div
                    initial={{y: "-100px"}}
                    animate={{y: 0}}
                    transition={{type:'spring', delay:0.5 }}
                 ><Fastfood/></motion.div>
                 <span>Besty.</span>     
            </a>
            <motion.nav 
                
                initial={{y:"-100px"}}
                animate={{y:0}}
                transition={{type:"spring", delay:0.5 }}
                // variants={variants}
               class= {pnav? "navbar phone_navbar" : "navbar"} >
                <a href="#"><Link to="/">home</Link></a>
                <a href="#"><Link to="/dishes">Dishes</Link></a>
                <a href="#"><Link to="/contact">Contact</Link></a>
                <a href="#"><Link to="/about">About</Link></a>
            </motion.nav>

            <div>
                  <button className='btn1' onClick={()=>{setPnav(!pnav)}} ><Menu/></button>
            </div> 
            <motion.div 
                initial={{x:"100vh"}}
                animate={{x:0}}
                transition={{type:"spring", delay:0.5 }}
            className="icons">  
                <Link to="/about"><Search/></Link>
                <Link to="/cart"><Shop/></Link>
                <Link to="/login"><AccountBox/></Link>
                
            </motion.div>

        </header>
        
  )
}

export default Navbar