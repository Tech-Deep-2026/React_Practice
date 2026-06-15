import React from 'react';
import { LOGO_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, avgRating, costForTwo, deliveryTime } = resData.data;
  
  return (
    <div className='restaurant-card'>   
        <img src={LOGO_URL} alt='logo' className='restaurant-logo'/>
        <h3>{name}</h3>
        <p>Cuisine: {cuisine.join(', ')}</p> 
        <p>Rating: {avgRating}</p>
        <p>Cost for Two: {costForTwo}</p>
        <p>Delivery Time: {deliveryTime}</p>
    </div>
  );
}
export default RestaurantCard;