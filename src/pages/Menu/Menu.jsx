import React, { memo, useState } from 'react'
import FoodItem from './FoodItem/FoodItem'
import { useParams } from 'react-router-dom'
import { IoClose } from "react-icons/io5";

const Menu = () => {

  const { categoryId } = useParams();
  const [whichCategory, setWhichCategory] = useState(categoryId);
  const [menuOpen, setMenuOpen] = useState(false)

  const openOrNot = menuOpen ? "tablet:translate-x-0" : "tablet:-translate-x-[40rem]";

  const menuData = {
    1: [
      { id: 7, name: "Cheeseburger", price: 5.99, imgUrl: "/menu-imgs/fast-food-imgs/ff-1.webp" },
      { id: 8, name: "Chicken Nuggets", price: 4.50, imgUrl: "/menu-imgs/fast-food-imgs/ff-2.webp" },
      { id: 9, name: "Fries", price: 2.99, imgUrl: "/menu-imgs/fast-food-imgs/ff-3.webp" },
      { id: 10, name: "Spicy Chicken Sandwich", price: 6.75, imgUrl: "/menu-imgs/fast-food-imgs/ff-4.webp" },
      { id: 11, name: "Soft Drink", price: 1.99, imgUrl: "/menu-imgs/fast-food-imgs/ff-5.webp" },
      { id: 12, name: "Double Cheese Pizza", price: 8.95, imgUrl: "/menu-imgs/fast-food-imgs/ff-6.webp" }
    ]
    ,
    2: [
      { id: 1, name: "Szechuan Tofu Stir Fry", price: 10.50, imgUrl: "/menu-imgs/chinese-food/chineese-1.webp" },
      { id: 2, name: "Shrimp Dumplings", price: 12.75, imgUrl: "/menu-imgs/chinese-food/chineese-2.webp" },
      { id: 3, name: "chicken and Broccoli", price: 14.99, imgUrl: "/menu-imgs/chinese-food/chineese-3.webp" },
      { id: 4, name: "chicken Spring Rolls", price: 6.25, imgUrl: "/menu-imgs/chinese-food/chineese-4.webp" },
      { id: 5, name: "Sweet and Sour Chicken", price: 11.50, imgUrl: "/menu-imgs/chinese-food/chineese-5.webp" },
      { id: 6, name: "Fried Rice", price: 8.95, imgUrl: "/menu-imgs/chinese-food/chineese-6.webp" }
    ],
    3: [
      { id: 13, name: "Grilled Chicken Breast", price: 12.99, imgUrl: "/menu-imgs/non-veg/non-veg1.webp" },
      { id: 14, name: "Beef Tacos", price: 9.50, imgUrl: "/menu-imgs/non-veg/non-veg2.webp" },
      { id: 15, name: "Lamb Kebabs", price: 14.99, imgUrl: "/menu-imgs/non-veg/non-veg3.webp" },
      { id: 16, name: "Shrimp Scampi Pasta", price: 16.75, imgUrl: "/menu-imgs/non-veg/non-veg4.webp" },
      { id: 17, name: "BBQ Pulled Pork Sandwich", price: 8.99, imgUrl: "/menu-imgs/non-veg/non-veg5.webp" },
      { id: 18, name: "Fish and Chips", price: 11.95, imgUrl: "/menu-imgs/non-veg/non-veg6.webp" }
    ],
    4: [
      { id: 19, name: "Vegetarian Pizza", price: 9.99, imgUrl: "/menu-imgs/veg/veg-1.webp" },
      { id: 20, name: "Spinach and Feta Stuffed Mushrooms", price: 7.50, imgUrl: "/menu-imgs/veg/veg-2.webp" },
      { id: 21, name: "Veggie Burger", price: 8.99, imgUrl: "/menu-imgs/veg/veg-3.webp" },
      { id: 22, name: "Eggplant Parmesan", price: 10.75, imgUrl: "/menu-imgs/veg/veg-4.webp" },
      { id: 23, name: "Quinoa Salad", price: 6.49, imgUrl: "/menu-imgs/veg/veg-5.webp" },
      { id: 24, name: "Caprese Panini", price: 12.95, imgUrl: "/menu-imgs/veg/veg-6.webp" }
    ],
  }

  return (
    <section className="py-20 overflow-auto px-5">
      <div className=" max-w-[89rem] mx-auto">
        <div className="grid grid-cols-menuLayout grid-rows-auto gap-12 relative tablet:grid-cols-1">
          <div className={`h-full bg-slate-100 py-8 px-6 shadow-lg shadow-black transition-all duration-300 ease-in-out tablet:absolute tablet:-top-12 tablet:left-0 tablet:z-50 tablet:pt-24 ${openOrNot}`}>
            <ul className={`h-full flex flex-col gap-8 text-xl font-semibold text-center relative`}>
              <IoClose onClick={() => setMenuOpen(false)} className="hidden absolute text-5xl bg-white py-1 shadow-md cursor-pointer active:bg-black active:text-white shadow-black
             px-2 rounded-md font-semibold text-black mobile-lg:block -top-20 -right-3  tablet:block" />
              <li onClick={() => {
                setWhichCategory(1)
                setMenuOpen(false)
              }} className={`py-2 ${whichCategory == 1 ? 'bg-primary text-white' : 'bg-white'} rounded-lg shadow-md shadow-black cursor-pointer`}>Fast Food</li>
              <li onClick={
                () => {
                  setWhichCategory(2)
                  setMenuOpen(false)
                }} className={`py-2 ${whichCategory == 2 ? 'bg-primary text-white' : 'bg-white'} rounded-lg shadow-md shadow-black cursor-pointer`}>Chinese Food</li>
              <li onClick={() => {
                setWhichCategory(3)
                setMenuOpen(false)
              }} className={`py-2 ${whichCategory == 3 ? 'bg-primary text-white' : 'bg-white'} rounded-lg shadow-md shadow-black cursor-pointer px-5`}>Non-Vegeterian Food</li>
              <li onClick={() => {
                setWhichCategory(4)
                setMenuOpen(false)
              }} className={`py-2 ${whichCategory == 4 ? 'bg-primary text-white' : 'bg-white'} rounded-lg shadow-md shadow-black cursor-pointer`}>Vegeterian Food</li>
            </ul>
          </div>

          {/* food items */}
          <div className="grid grid-cols-3 grid-rows-auto gap-5 py-5 px-5 gap-y-7 h-[700px] overflow-auto laptop:grid-cols-2 tablet:mt-5 mobile-lg:grid-cols-1 mobile-md:px-2">
            <button onClick={() => setMenuOpen(true)}
              class="hidden items-center px-4 py-2 bg-primary shadow-md shadow-black transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 active:bg-black active:text-white tablet:inline-block tablet:absolute tablet:-top-9"
            >
              Get Menu
            </button>

            {
              menuData[whichCategory].map((product) => <FoodItem key={product.id} imgUrl={product.imgUrl} foodName={product.name} price={product.price} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Menu)
