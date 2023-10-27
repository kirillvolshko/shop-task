import React from 'react'
import './Menu.css'
function Menu() {
  return (
    <div className='menu-container'>
        <div>
            <img alt='img' src='images/1.jpg'/>
        </div>
        <div>
            <img alt='img'  src='images/2.jpg'/>
        </div>
        <div>
            <img alt='img'  src='images/3.jpg'/>
        </div>
        <div className='button-filter'>
            Filter
        </div>
        <div>
            <img alt='img'  src='images/4.jpg'/>
        </div>
    </div>
  )
}

export default Menu