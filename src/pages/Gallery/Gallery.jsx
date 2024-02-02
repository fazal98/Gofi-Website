import React, { memo } from 'react'
import { ContentCenter } from '../../components'

const Gallery = () => {
  return (

    <section className="text-gray-600 body-font text-center">
      <ContentCenter>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-10 flex-wrap">
            <h2 className=" text-5xl text-center w-full font-bold text-black capitalize mobile-lg:text-4xl mobile-lg:leading-tight">
              Have a look on our restaurant
            </h2>
            <p className="max-w-5xl mx-auto text-lg text-black leading leading-7 mt-5">
              There are many variations of passages of Lorem Ipsum available
              but the majority have suffered alteration in some form.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae perferendis quaerat sequi praesentium ratione.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={"/gallery-imgs/g-1.webp"} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={"/gallery-imgs/g-2.webp"} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={"/gallery-imgs/g-3.webp"} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={"/gallery-imgs/g-4.webp"} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={"/gallery-imgs/g-5.webp"} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={"/gallery-imgs/g-6.webp"} />
              </div>
            </div>
          </div>
        </div>
      </ContentCenter>
    </section>

  )
}

export default memo(Gallery)
