import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { resList } from '../utils/mockData';
import Shimmer from './Shimmer';

const Body = () => {

    //Localstate variable - super powerful variable - it can trigger UI changes when updated

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(listOfRestaurants);
    const [searchText, setSearchText] = useState('');

    
    console.log('Body rendered');
    
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log('Fetched Swiggy response:', json);
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log('Extracted restaurants:', restaurants);
            setListOfRestaurants(restaurants || []);
            setFilteredRestaurants(restaurants || []);
    }
    //Normal JS variable

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
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
                            setFilteredRestaurants(
                                listOfRestaurants.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                            );
                       console.log(searchText);
                    }}>Search</button>
                </div>
                <button className='filter-button'
                    onClick={() => {
                        const filterlist = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        console.log(filterlist);
                        setFilteredRestaurants(filterlist);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className='restaurant-list'>
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />

                ))}

            </div>
        </div>
    );
}
export default Body;