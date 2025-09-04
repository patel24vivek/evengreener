import React from 'react'
import Json from './components/Json'
import { useNavigate } from 'react-router-dom'

const Categoryp = () => {
    const Navigate=useNavigate()
  return (
    <div>
      {
        Json.map((a)=>{
            return(
<h1 onClick={()=>Navigate(`/${a.cat_name}`)}>{a.cat_name}</h1>
            )
        })
      }
    </div>
  )
}

export default Categoryp
