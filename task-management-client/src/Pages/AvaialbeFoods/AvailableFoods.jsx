import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../../Shared Component/FoodCard";
import Title from "../../Shared Component/title/Title";


const AvailableFoods = () => {

    const { data } = useLoaderData();
    // console.log(data);

    const [originalFoods, setOriginalFoods] = useState([])
    const [availableFoods, setAvailableFoods] = useState([]);


    const [changeLayout, setChangeLayout] = useState(true);

    useEffect(() => {

        setAvailableFoods(data);
        setOriginalFoods(data);

    }, [])



    const handleSearchBox = (e) => {

        const value = e.target.value.toLowerCase();
        // console.log(value);

        if (value) {
            const newAvailable = availableFoods.filter((availableFood) =>

                availableFood.food_name.toLowerCase().includes(value)

            )

            setAvailableFoods(newAvailable);
        }
        else{
            setAvailableFoods(originalFoods);
        }


    }


    return (
        <div className="space-y-8 lg:space-y-12 ">
            
            <Title text={"available foods"}/>

            <div className="w-11/12 mx-auto lg:flex gap-[50vw] justify-between lg:px-6 items-center">
                <button
                    onClick={() => setChangeLayout(!changeLayout)}
                    className="btn w-full flex-1 bg-gray-500 dark:bg-slate-400 text-white my-4 hidden  lg:block"
                >
                    Toggle Layout
                </button>

                {/* label for search box  */}

                <label className="input input-bordered w-full flex flex-1 items-center gap-2">
                    <input type="text" onChange={handleSearchBox} className="grow text-black" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>

            <div className={`grid grid-cols-1 gap-6   md:grid-cols-2 ${changeLayout ? `lg:grid-cols-3` : `lg:grid-cols-2`}`}>
                {
                    availableFoods.map((availableFood, index) => {


                        return <FoodCard key={index} food={availableFood} />

                    })
                }
            </div>
        </div>
    );
};

export default AvailableFoods;