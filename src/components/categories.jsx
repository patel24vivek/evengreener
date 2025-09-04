import React from 'react'
import Json from './Json'


const categories = () => {
  return (
    <div>
      {
        Json.map((a)=>{
            return(
<h1>{a.cat_name}</h1>
            )
        })
      }
    </div>
  )
}

export default categories
