import React from 'react';
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';

const Body = () => {

    //Localstate variable - super powerful variable - it can trigger UI changes when updated
    const [listOfRestaurants, setListOfRestaurants] = useState([
              {
            data: {
                id: "1",
                name: "KFC",
                cuisine: ["Fried Chicken", "Burgers"],
                avgRating: "4.2",
                costForTwo: "500",
                deliveryTime: "30 mins",
            }
        },
        {
            data: {
                id: "2",
                name: "Burger King",
                cuisine: ["Burgers", "Fries"],
                avgRating: "3.0",
                costForTwo: "300",
                deliveryTime: "25 mins",
            }
        },
        {
            data: {
                id: "3",
                name: "Pizza Hut",
                cuisine: ["Pizza", "Pasta"],
                avgRating: "4.5",
                costForTwo: "600",
                deliveryTime: "40 mins",
            }
        }
    ]);

    //Normal JS variable
    let listOfRestaurantsJS = [
        {
            data: {
                id: "1",
                name: "KFC",
                cuisine: ["Fried Chicken", "Burgers"],
                avgRating: "4.2",
                costForTwo: "500",
                deliveryTime: "30 mins",
            }
        },
        {
            data: {
                id: "2",
                name: "Burger King",
                cuisine: ["Burgers", "Fries"],
                avgRating: "3.0",
                costForTwo: "300",
                deliveryTime: "25 mins",
            }
        },
        {
            data: {
                id: "3",
                name: "Pizza Hut",
                cuisine: ["Pizza", "Pasta"],
                avgRating: "4.5",
                costForTwo: "600",
                deliveryTime: "40 mins",
            }
        }
    ];

  return (
    <div className='body'>    
        {/* <div className='search-container'>
            <input type='text' placeholder='Search for restaurant, cuisine or a dish' className='search-input'/>
            <button className='search-button'>Search</button>
        </div> */}
            <div className='filter-container'>
                <button className='filter-button' 
                    onClick = {()=>{
                        const filterlist = listOfRestaurants.filter(
                            (res) => res.data.avgRating > 4.0
                        );
                        console.log(filterlist);
                        setListOfRestaurants(filterlist);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='restaurant-list'>
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                ))}
              
            </div>
    </div>
  );
}
export default Body;