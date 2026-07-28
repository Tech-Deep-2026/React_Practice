import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { resList } from '../utils/mockData';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import useRestaurantData from '../utils/useRestaurantData';

const Body = () => {

    //Localstate variable - super powerful variable - it can trigger UI changes when updated
    const {
        restaurantList,
        filteredRestaurantList,
        searchText,
        setSearchText,
        setFilteredRestaurantList,
    } = useRestaurantData();
    console.log('Body rendered');
    
    const onlineStatus = useOnlineStatus();
    

    //Normal JS variable

    if (restaurantList.length === 0) {
        return <Shimmer />;
    }

    if (onlineStatus === false) {
        return (
            <h1>🔴 You are offline. Please check your internet connection.</h1>
        );
    }
    return (
        <div className='body'>

            <div className='filter-container'>
                <div className='search'>
                    <input 
                        type='text' 
                        className='search-box' 
                        placeholder='Search for restaurants' 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button 
                        className='search-btn'
                        onClick={() => {
                            setFilteredRestaurantList(
                                restaurantList.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                            );
                            console.log(searchText);
                        }}>Search</button>
                </div>
                <button className='filter-button'
                    onClick={() => {
                        const filterlist = restaurantList.filter(
                            (res) => res.info.avgRating > 4.0
                        );
                        console.log(filterlist);
                        setFilteredRestaurantList(filterlist);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='restaurant-list'>
                {filteredRestaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />

                ))}

            </div>
        </div>
    );
}
export default Body;