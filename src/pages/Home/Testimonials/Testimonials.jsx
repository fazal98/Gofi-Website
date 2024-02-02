import React, { memo } from 'react'
import { ContentCenter } from '../../../components'
import TestimonialCard from './TestimonialCard/TestimonialCard';


const Testimonials = () => {

    const testmonialData = [
        { imgLink: "/testimonial/testi-1.webp", customerName: "Florida Lunasde", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet" },
        { imgLink: "/testimonial/testi-1.webp", customerName: "Florida Lunasde", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet" },
        { imgLink: "/testimonial/testi-1.webp", customerName: "Florida Lunasde", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet" },
    ]

    return (
        <section className="bg-white text-black pb-20">
            <div className="container px-6 mx-auto text-center">
                <ContentCenter>
                    <h2 className=" mb-4 text-5xl font-bold text-black capitalize mobile-lg:text-4xl mobile-lg:leading-tight">
                        customers Reviews
                    </h2>
                    <p className="max-w-5xl mx-auto text-lg text-black leading leading-7 mt-5">
                        There are many variations of passages of Lorem Ipsum available
                        but the majority have suffered alteration in some form.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae perferendis quaerat sequi praesentium ratione.
                    </p>
                    <div className="w-full grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3 text-left">
                        {
                            testmonialData.map((customerReview,index) => <TestimonialCard key={index} imgLink={customerReview.imgLink} desc={customerReview.description} customerName={customerReview.customerName} />)
                        }



                    </div>
                </ContentCenter>
            </div>
        </section>

    )
}

export default memo(Testimonials)
