import React from 'react'
import Post from '../Data/Post.jsx'
import '../pages/Products.scss'
import { FaHandshake } from 'react-icons/fa'
import { FcFactory } from 'react-icons/fc'
import { GiFactory } from 'react-icons/gi'

import NestedDropdown from '../Data/Dropdown.jsx'

const Products = () => {
  return (
    <> 

    <NestedDropdown/>

    <div className='bg'>
  <div className='postcontainer'> 
    {
      Post.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.country}</h1>

            {
              item.state.map((i) => {
                return (
                  <div key={i.id} style={{ marginLeft: "20px" }}>
                    <h2>{i.state}</h2>

                    {
                      i.city.map((c) => {
                        return (
                          <div key={c.id} style={{ marginLeft: "40px" }}>
                            <h3>{c.city}</h3>
                          </div>
                        )
                      })
                    }

                  </div>
                )
              })
            }
          </div>
        )
      })
    }
  </div>
</div>

      
      {/* <div className='bg'>
        <div className='postcontainer' >
      {
          Post.map((item)=>{
            return(
              <div className='post' key={item.title}>
                <img src={item.image} alt="" />
               <h2>{item.title}</h2>

               <a href="">Shop now</a>
              </div>
            )
          })
        }
    </div></div> */}

    <div className='bbar'>
      <div className="line-bar">
  <div style={{
    display: "flex",
    gap: "30px",
    height:"80px",
    borderRight: "1px solid black",
    paddingRight: "10px",
    alignItems: "center"
  }}>
    <FaHandshake />
    <div>
      <strong>Service You Can Count On</strong><br />
      Our Customer Care Team is here to help.
    </div>
  </div>
  <div style={{
    display: "flex",
    gap: "30px"
  }}>
     <GiFactory/>
    <div>
      <strong>Our Bestsellers</strong><br />
      Are made from recycled plastic.
    </div>
  </div>
</div>

    </div>
    
    </>
    
  )
}

export default Products
