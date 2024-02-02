import React, { memo } from 'react'
import { RiStarSFill } from "react-icons/ri";

const TestimonialCard = ({ imgLink, customerName, desc }) => {
    return (
        <div className="p-6 border rounded-xl border-gray-700 shadow-md shadow-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-110">
            <div className="grid grid-cols-testimonialbox gap-1">
                <figure className="inline-block rounded-full">
                    <img className="w-full rounded-full h-16 object-cover object-center" src={imgLink} alt="person image" />
                </figure>
                <div className="flex items-center">
                    <h5 className="text-xl text-left font-medium capitalize pl-3">{customerName}</h5>
                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-1 text-primary text-2xl mt-3">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
            </div>
            <p className="mt-3">
            {desc}
            </p>
        </div>
    )
}

export default memo(TestimonialCard)
