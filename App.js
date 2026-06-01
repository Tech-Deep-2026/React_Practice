import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Header = () => {
  return (
    
        <div className='header'>
            <div className='logo-container'>
                <img src="https://img.freepik.com/premium-vector/logo-design-restaurant-food-company_1253202-52278.jpg" alt='logo' className='logo'/>
            </div>
        
          <div className='nav-items'>
              <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
              </ul>
          </div>
        </div>     
  );
}
const RestaurantCard = () => {
  return (
    <div className='restaurant-card'>   
        <img src="https://img.freepik.com/premium-vector/logo-design-restaurant-food-company_1253202-52278.jpg" alt='logo' className='restaurant-logo'/>
        <h3>Restaurant Name</h3>
        <p>Cuisine: Indian, Chinese</p> 
        <p>Rating: 4.5</p>
    </div>
  );
}
const Body = () => {
  return (
    <div className='body'>    
        <div className='search-container'>
            <input type='text' placeholder='Search for restaurant, cuisine or a dish' className='search-input'/>
            <button className='search-button'>Search</button>
        </div>
            <div className='restaurant-list'>
                <ul>
                    <li><RestaurantCard /></li>
                    <li><RestaurantCard /></li>
                    <li><RestaurantCard /></li>
                    <li><RestaurantCard /></li>   
                </ul>
              
            </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

