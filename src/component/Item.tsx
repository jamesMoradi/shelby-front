import React from 'react'
import cofee from '../assets/cofee2.png'

const Item = () => {
  return (
    <div className="m-8 my-4 bg-[#391d0c] custom-rounded text-white border border-black side-neon-shadow">
        <div className="img bg-custom-rounded p-4">
            <img className='bg-custom-rounded w-full h-40 overflow-hidden object-cover' 
            src={cofee} alt="" />
        </div>
        <div className="p-3 border-t-[1px] border-t-black text-right">
            <h1>اسپرسو</h1>
            <h3>از مشتقات قهوه</h3>
            <p>25,000</p>
        </div>
    </div>
  )
}

export default Item