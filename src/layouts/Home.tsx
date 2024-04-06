import React, { useEffect, useState } from 'react'

import logo1 from '../assets/logo1.png'
import Item from '../component/Item'
import axios from 'axios'
import api from '../api'


const Home = () => {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    const getDatas = async () => {
      const datas = await api.get('/orders')
      if (datas.status === 200) setDatas(datas.data)
    }

    getDatas()
  }, [])
  
  return (
    <div className=' w-4/5 overflow-scroll'>
        <div className='flex flex-col justify-center p-4'>
           
        </div>
    </div>
  )
}

export default Home