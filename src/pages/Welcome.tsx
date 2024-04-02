import React, { useEffect, useState } from 'react'

import logo from '../assets/logo.png'
import ig from '../icons/ig.png'
import call from '../icons/call.png'
import loc from '../icons/loc.png'
import rules from '../icons/rules.png'
import { Link } from 'react-router-dom'

const Welcome = () => {
    const [hour, setHour] = useState(12)

    useEffect(() => {
        const time = new Date().getHours()
        setHour(time)
    }, [])

  return (
    <div className='h-screen bg-image flex flex-col items-center justify-between'>

        <div className='flex justify-center flex-col items-center'>
          <div className='p-10 gray-logo'>
            {/* <img src={logo} alt="" className='block gray-logo'/> */}
          </div>
            <div className='text-white text-center custom-font text-2xl neon capitalize'>
                {hour >= 6 && hour <= 12 && <p>good morning</p>}
                {hour <= 18 && hour > 12 && <p>good afternoon</p>}
                {hour > 18 && hour < 23 && <p>good evening</p>}
            </div>
        </div>


        <div className='flex flex-col justify-center items-center gap-12 mb-10'>
            <div className='flex flex-row justify-center gap-5 items-center neon text-2xl'>
            <div className='neon-shadow w-40 p-2 outline-none'>
                <Link className='capitalize' to={'/caffe-menu'}>cafee <br/> menu</Link>
            </div>
            <div className='neon-shadow w-40 p-2 outline-none'>
                <Link className='capitalize' to={'/caffe-menu'}>breakfast <br/> menu</Link>
            </div>
            </div>
           
            <div className='flex flex-row items-center gap-3'>
            <a href="tel:09126438301">
              <img className='block w-14' src={call} alt="" />
            </a>
            <a href="#">
              <img className='block w-14' src={rules} alt="" />
            </a>
            <a href="#">
              <img className='block w-14' src={loc} alt="" />
            </a>
            <a href="https://www.instagram.com/shelby_cafe_">
              <img className='block w-9' src={ig} alt="" />
            </a>
        </div>
        </div>
    </div>
  )
}

export default Welcome