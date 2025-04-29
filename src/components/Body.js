import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restList);

    return (
        <div className="body">
            <div className="search">
                <button className="top-res"
                    onClick={() => {
                        const topRatedRest = restList.filter((restaurant) => restaurant.rating > 4);
                        setListOfRestaurants(topRatedRest);
                    }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard resData={restaurant} key={restaurant.id} />
                    })
                }

            </div>
        </div>
    )
};

export default Body;