import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {

    // console.log(food);

    const { food_name, food_image, food_quantity, food_status, expired_datetime, pickup_location, _id } = food;

    return (
        <div className="bg-white dark:bg-slate-500 dark:text-white border border-gray-200 rounded-lg shadow-md p-3 lg:p-5 w-[95%] lg:w-[80%]  mx-auto space-y-2 md:space-y-4 hover:shadow-lg transition-shadow duration-300">
            <img
                src={food_image}
                alt={food_name}
                className="rounded-lg w-full h-60 object-cover"
            />
            <h2 className="text-lg font-bold text-gray-800 dark:text-white ">{food_name}</h2>
            {/* paragraphs  */}
            <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-white ">
                    <span className="font-semibold">Quantity:</span> {food_quantity}
                </p>
                <p className="text-sm text-gray-600 dark:text-white ">
                    <span className="font-semibold">Pickup Location:</span> {pickup_location}
                </p>
                <p className="text-sm text-gray-600 dark:text-white ">
                    <span className="font-semibold">Expired Date:</span> {expired_datetime}
                </p>

            </div>

            {/* food status  */}

            <p
                className={`text-sm font-semibold ${food_status === "available"
                    ? "text-green-500"
                    : "text-red-500"
                    }`}
            >
                Status: {food_status}
            </p>

            <Link to={`/food-details/${_id}`}>
                <button className="btn bg-green-300 mt-2 md:mt-5">Details</button>
            </Link>
        </div>

    );
};

export default FoodCard;