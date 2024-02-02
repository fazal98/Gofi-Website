import { memo } from "react"
import {ContentCenter} from "../../../../components";

const Section = ({ heading, paragraph, btnText,bgUrl }) => {
    return <>
        <section style={{background : `linear-gradient(to top, #000000e3, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgUrl})`,backgroundSize : "100%"}} className="w-screen text-white bg-fixed bg-center bg-no-repeat py-52 px-16 laptop:!bg-cover laptop:!bg-center tablet:py-36 mobile-md:px-8 mobile-md:py-32">
            <ContentCenter>
                <div>
                    <h2 className="text-6xl font-semibold tracking-wide text-center capitalize tablet:text-5xl mobile-lg:leading-snug mobile-md:leading-normal mobile-md:text-4xl">{heading}</h2>
                    <p className="mx-auto mt-6 text-lg leading-8 text-center capitalize max-w-7xl mobile-md:text-base">{paragraph}</p>
                    <button
                        className="mt-6 relative shadow-lg shadow-black tracking-wide mx-auto py-3 px-12 text-2xl font-bold nded-full overflow-hidden  bg-tertiary rounded-md
                        text-white transition-all duration-400 ease-in-out  hover:scale-105 hover:shadow-white hover:text-white hover:shadow-2xl  active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0 mobile-lg:scale-75"
                    >
                        {btnText}
                    </button>
                </div>
            </ContentCenter>
        </section>
    </>
}

export default memo(Section);
