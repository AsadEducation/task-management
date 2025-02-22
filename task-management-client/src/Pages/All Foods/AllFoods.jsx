import React, { useState } from 'react';
import useFoods from '../../Hooks/useFoods';
import FoodCard from '../../Shared Component/FoodCard';
import Title from '../../Shared Component/title/Title';

const AllFoods = () => {

    const [sorted, setSorted] = useState(false);
    const [search, setSearch] = useState('');

    const { allFoods, setAllFoods, loading } = useFoods(sorted, search);

    // console.log(allFoods);

    console.log(sorted);


    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-ring text-green-600 loading-lg"></span>
        </div>
    }

    return (
        <div className='space-y-12 min-h-screen'>

            {/* <h2 className="text-3xl lg:text-5xl font-semibold text-center">All Foods </h2> */}
            <Title text="all foods" />

            <div className='w-11/12 mx-auto lg:flex gap-[50vw] items-center justify-between'>
                <button onClick={() => setSorted(!sorted)} className={`btn flex-1 w-full ${sorted ? 'bg-green-400 text-black' : 'bg-gray-500 dark:bg-slate-400 text-white'}`}>{
                    sorted ? 'sorted' : 'sort by expires'}</button>

                <label className="input input-bordered flex flex-1 w-full items-center gap-2">
                    <input type="text" onChange={(e) => {
                        setSearch(e.target.value);

                        // console.log(e.target.value);

                    }} className="grow text-black" placeholder="Search" />
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

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allFoods.map((hotFood, index) => {

                        return <FoodCard key={index} food={hotFood} />

                    })
                }
            </div>


        </div>
    );
};

export default AllFoods;