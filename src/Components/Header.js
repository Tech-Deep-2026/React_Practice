import React, { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Rendered");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("UseEffect called");
  }, [])

  const cartItem = useSelector((store) => store.cart.items || []);

  return (

    <div className='flex justify-between shadow-lg m-2 h-30'>
      <div className='w-30'>
        <img src={LOGO_URL} alt='logo' className='logo' />
      </div>

      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
          <li className='px-4'>
            <Link to="/">Home</Link>
          </li>
          <li className='px-4'>
            <Link to="/about">About Us</Link>
          </li>
          <li className='px-4'>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className='px-4'>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to="/cart">Cart  - ({cartItem.length} items)</Link>
          </li>
          <button
            className='login'
            onClick={() => {
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