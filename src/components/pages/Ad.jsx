import React from 'react'
import './Ad.scss'

const Ad = () => {
  return (
   <>
    <div className='container'>
    <div className='cone'>
       <div> <div className='image'>
        <img src="https://evengreener.com/cdn/shop/files/GardenW_1_1_143x40.png?v=1638807751" style={{width: '150px'}} alt="" />
        <img src="https://evengreener.com/cdn/shop/files/Group_1318_1_60x60.png?v=1638807772" style={{width: '70px'}} alt="" />
       </div>
        <h1>Voted the best 'BUDGET BUY' <br />in Gardeners' World <br /> Magazine</h1>
        <a href="">GET YOURS NOW</a>
       </div>
    </div>
    <div className='ctwo'>
      <span> <h3> Blackwall 220 Litre Black Compost Converter.</h3> </span> <br />

        <span> With 3+ million sold to date, this is the UK’s best-selling compost bin, and for a reason. Expertly designed for simple use, transform all organic waste into nutritious, valuable feed to enrich your soil and nurture your garden.</span>
        <br/>
        <button>SHOP RAINSAVERS</button>
    </div>
    </div>
   </>
  )
} 

export default Ad
