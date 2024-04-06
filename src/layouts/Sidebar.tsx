import React from 'react'

import ig from '../icons/ig.png'
import call from '../icons/call.png'
import loc from '../icons/loc.png'
import rules from '../icons/rules.png'

import {logos} from '../icons/index'

const Sidebar = () => {
  return (
    <div className='w-1/5 bg-[#281305] h-fit rounded-lg side-neon-shadow overflow-scroll'>
      <div className='flex flex-col justify-center items-center'>
        {logos.map((each, i) => <a key={i}>
          <img className='block w-12 mb-2' src={each} alt="" />
        </a>)}
        <a href="tel:09126438301">
          <img className='block w-14' src={call} alt="" />
        </a>
        <a href="">
          <img className='block w-14' src={rules} alt="" />
        </a>
        <a href="">
          <img className='block w-14' src={loc} alt="" />
        </a>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Sidebar