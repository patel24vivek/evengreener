import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Data from './components/data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Banner from './components/pages/Banner.jsx'
import Products from './components/pages/Products.jsx'
import Slider from './components/pages/slider.jsx'
import Footer from './components/pages/Footer.jsx'
import Categoryp from './Categoryp.jsx'
import Pro from './components/Pro.jsx'


const App = () => {

  // const [a,setA] =useState([])

  // const fetchapi=async()=>{
  // const{data}=await  axios.get('https://jsonplaceholder.typicode.com/posts')
  //   setA(data)
  // }

  // useEffect(()=>{
  //   fetchapi()
  // },[])
  return (
//     <div className='main'>
//      { 
//       Data.map((item)=>{
// return(
//    <p className='title'>{item.title}</p>
// )

//       })
      
//      }
//     </div>
<>
    <BrowserRouter>
     <Header/>
    <Routes>
    /* <Route path='/'  element={<Banner/>} />
    <Route path='/products'   element={<Products/>}/>
    <Route path='/slider'  element={<Slider/>} /> 
       {/* <Route path='/category'  element={<Categoryp/>} />
       <Route path='/:pro'  element={<Pro/>} /> */}
    </Routes>
     <Footer/> 
    </BrowserRouter>

</>  )
}

export default App
