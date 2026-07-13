import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { resList } from '../utils/mockData';

const Body = () => {

    //Localstate variable - super powerful variable - it can trigger UI changes when updated

    const [listOfRestaurants, setListOfRestaurants] = useState(resList.restaurants);
    console.log(listOfRestaurants);
    
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log('Fetched Swiggy response:', json);
    }
    //Normal JS variable

    return (
        <div className='body'>

            <div className='filter-container'>
                <button className='filter-button'
                    onClick={() => {
                        const filterlist = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.0
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
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />

                ))}

            </div>
        </div>
    );
}
export default Body;