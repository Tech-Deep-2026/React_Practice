import { useEffect } from "react";

const RestaurantMenu = () =>{

    useEffect(()=>{
        fetchMenu(); 
    },[]);
    console.log('RestaurantMenu UseEffect called');
    
    const fetchMenu = async () => {

        const data = await fetch(
             "https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=21001&catalog_qa=undefined&submitAction=ENTER"
        );
        console.log(data);
        //const json = await data.json();
        //console.log(json);
    }

    return(
        <div>
            <h1>Restaurant Menu</h1>
            <div>
                <h3>Menus</h3>
                <li></li>
                <li></li>
                <li></li>
            </div>
        </div>
    );
}

export default RestaurantMenu;