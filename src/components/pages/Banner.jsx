import React from 'react'
import "../pages/banner.scss"
import Products from './Products'
import Slider from './slider'
import Footer from './Footer'
import Ad from './Ad'

const Banner = () => {
  return (
    <>
    <div>
    <div className='banner'>
      <div className='tit'>
        <span>spotlight on saving water</span> 
        <span style={{
         fontSize : '20px',
         paddingTop : '20px'
        }}>Lorem ipsum dolor sit amet  Similique tenetur iste voluptatibus, expedita, maxime aspernatur ad eius maiores voluptas unde repellat?</span>
      </div>
    </div>
    </div>
    <Products/>
    <Slider/>
    <Ad/>
    
    </>
  )
}

export default Banner
