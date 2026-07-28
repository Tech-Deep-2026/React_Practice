import { useState, useEffect } from 'react';

const useRestaurantData = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log('Fetched Swiggy response:', json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log('Extracted restaurants:', restaurants);
        setRestaurantList(restaurants || []);
        setFilteredRestaurantList(restaurants || []);
    }

    return {
        restaurantList,
        setRestaurantList,
        filteredRestaurantList,
        setFilteredRestaurantList,
        searchText,
        setSearchText
    }
}
    export default useRestaurantData;