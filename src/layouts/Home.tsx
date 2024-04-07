import React, { useEffect, useState } from 'react'

import logo1 from '../assets/logo1.png'
import Item from '../component/Item'
import axios from 'axios'
import api from '../api'


const Home = () => {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    const getDatas = async () => {
      const datas = await api.get('/orders')
      if (datas.status === 200) setItems(datas.data.data)
    }
    getDatas()
  }, [])

  return (
    <div className='m-8 w-4/5 overflow-scroll'>
        <div className='flex flex-col justify-center p-4'>
          <h1 className='custom-h1'>اسپرسو</h1>
          {items?.map(each => each.category === 'espresso' && <Item key={each._id} data={each}/>)}
          <h1 className='custom-h1'>بار گرم</h1>
          {items?.map(each => each.category === 'hot-bar' && <Item key={each._id} data={each}/>)}
          <h1 className='custom-h1'>بار سرد</h1>
          {items?.map(each => each.category === 'cold-bar' && <Item key={each._id} data={each}/>)}
          <h1 className='custom-h1'>آیس بار</h1>
          {items?.map(each => each.category === 'ice-bar' && <Item key={each._id} data={each}/>)}
          <h1 className='custom-h1'>شیک</h1>
          {items?.map(each => each.category === 'shakes' && <Item key={each._id} data={each}/>)}
          <h1 className='custom-h1'>دمی</h1>
          {items?.map(each => each.category === 'dami' && <Item key={each._id} data={each}/>)}
          <h1 className='custom-h1'>چای</h1>
          {items?.map(each => each.category === 'tea' && <Item key={each._id} data={each}/>)}
        </div>
    </div>
  )
}

export default Home