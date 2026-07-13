import React from 'react';
import { MENU_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId,name, cuisines, avgRating, costForTwo, sla } = resData.info;
  
  return (
    <div className='restaurant-card'>   
        <img src={MENU_URL + cloudinaryImageId} alt='logo' className='restaurant-logo'/>
        <h3>{name}</h3>
        <p>Cuisine: {cuisines.join(', ')}</p> 
        <p>Rating: {avgRating}</p>
        <p>Cost for Two: {costForTwo}</p>
        <p>Delivery Time: {sla.slaString}</p>
    </div>
  );
}
export default RestaurantCard;