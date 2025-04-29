const RestaurantCard = ({ resData }) => {
    const { name, cuisine, rating, deliveryTime, image } = resData;
    const restName = name.length > 15 ? name.slice(0, 15) + "..." : name;
    return (
        <div className="restaurant-card" >
            <img src={image} alt="logo" className="res-logo" />
            <h2>{restName}</h2>
            <h3>{cuisine}</h3>
            <h3>{rating} star</h3>
            <h3>{deliveryTime}</h3>
        </div>
    )
}

export default RestaurantCard;
