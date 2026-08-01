import React from 'react';
import { MENU_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId,name, cuisines, avgRating, costForTwo, sla } = resData.info;
  
  return (
    <div data-testid="resCard" className='p-4 m-4 w-54 bg-gray-100 hover:bg-gray-200 rounded-lg'>   
        <img src={MENU_URL + cloudinaryImageId} alt='logo' className='rounded-lg mb-4 h-40 w-50'/>
        <h3 className='font-bold mb-2'>{name}</h3>
        <p>Cuisine: {cuisines.join(', ')}</p> 
        <p>Rating: {avgRating}</p>
        <p>Cost for Two: {costForTwo}</p>
        <p>Delivery Time: {sla.slaString}</p>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  console.log("withPromotedLabel rendered");
  return () =>{
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;