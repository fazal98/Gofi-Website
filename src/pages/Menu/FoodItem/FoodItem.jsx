import React from 'react'

const FoodItem = ({foodName,price,imgUrl}) => {
    return (
        <div className=" bg-slate-100 shadow-lg shadow-black rounded-lg cursor-pointer transition-all duration-300 ease-in-out z-40 hover:scale-105">
            <div className="h-full flex flex-col items-center text-center">
                <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={imgUrl} />
                <div className="w-full">
                    <h2 className="title-font font-medium text-2xl text-gray-900">{foodName}</h2>
                    <h3 className="text-gray-500 mb-3 text-xl mt-2">₹{price}</h3>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
