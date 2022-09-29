import React from 'react'
import CarouselHome from '../component/CarouselHome'
import Footerr from '../component/Footer'
import Navbarr from '../component/Navbar'



const HomePage = () => {
  return (
    <div>
        <Navbarr/>
        <div className='carouselll'>
          <div className='mb-5'>
          <CarouselHome></CarouselHome>
          </div>
          
        <img src='/about-usB.jpg' alt='Logo' width="100%" className='mt-5 mb-0' />
        
        </div>
        <footer className='mt-1'><Footerr/></footer>

    </div>
  )
}

export default HomePage