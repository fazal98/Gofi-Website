import React, { memo } from 'react'
import HeroSection from './HeroSection/HeroSection'
import Categories from './Categories/Categories'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
  
  return (
    <div>
     <HeroSection/>
     <Categories/>
     <Testimonials/>
    </div>
  )
}

export default memo(Home)
