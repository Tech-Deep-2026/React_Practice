import React, { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Rendered");

    useEffect(()=>{
        console.log("UseEffect called");
    },[])

  return (
    
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} alt='logo' className='logo'/>
            </div>
        
          <div className='nav-items'>
              <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                    </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                    </li>
                  <button
                    className='login'
                    onClick={()=>{
                        btnNameReact === "Login" 
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login")
                    }}
                  >
                    {btnNameReact}
                  </button> 
              </ul>
          </div>
        </div>     
  );
}
export default Header;