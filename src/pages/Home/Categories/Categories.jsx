import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {

  const categories = [
    { categoryName: "fast food", urlLink: "/category-imgs/category-1.webp",categoryId : 1 },
    { categoryName: "chinese", urlLink: "/category-imgs/category-2.webp",categoryId : 2 },
    { categoryName: "Non-Vegeterian", urlLink: "/category-imgs/category-3.webp",categoryId : 3 },
    { categoryName: "Vegeterian", urlLink: "/category-imgs/category-4.webp",categoryId : 4 },
  ]

  const navigate = useNavigate();

  return (
    <>
      <section className="bg-white py-20">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] w-full text-center lg:mb-20">
                <h2 className="mb-4 text-5xl font-bold text-black capitalize mobile-lg:text-4xl mobile-lg:leading-tight">
                  we have different <span className="text-primary">categories</span>
                </h2>
                <p className="max-w-5xl mx-auto text-lg text-black leading leading-7 mt-5">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae perferendis quaerat sequi praesentium ratione.
                </p>
                <div className="mt-8 uppercase text-xl grid grid-cols-4 grid-rows-auto gap-6 text-white rounded-md laptop:max-w-4xl laptop:mx-auto laptop:grid-cols-2 mobile-md:gap-y-5 mobile-lg:grid-cols-1">
                  {
                    categories.map((category, index) => {
                      return <div onClick={() => navigate(`menu/${category.categoryId}`)}  key={index} style={{ backgroundImage: `linear-gradient(to top, #000000e3, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('${category.urlLink}')` }} className="py-20 bg-no-repeat bg-center bg-cover rounded-md shadow-md shadow-black transition-all duration-500 ease-in-out font-semibold hover:bg-full2xl hover:scale-110 cursor-pointer">
                        <h5>{category.categoryName}</h5>
                      </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;

