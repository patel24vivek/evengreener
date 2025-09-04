import React from 'react'
import Json from './Json'
import { useParams } from 'react-router-dom'

const Pro = () => {

    const{pro}=useParams()
  return (
    <div>
      {
        Json
        .filter((a)=>a.cat_name==pro)
        .map((a)=>{
            return(
<>

{
    a.product.map((b)=>{
        return(
            <p>{b.product_name}</p>
        )
    })
}
</>
            )
        })
      }
    </div>
  )
}

export default Pro
