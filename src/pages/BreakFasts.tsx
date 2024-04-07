import React, { useEffect, useState } from 'react'
import { getData } from '../services/axios'
import Item from '../component/Item'

const BreakFasts = () => {
    const [breakFasts, setBreakfasts] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await getData()
            setBreakfasts(data.filter((each : any) => each.category === 'breakfast'))
        }

        fetchData()
    }, [])

  return (
    <div>
        <div className='flex flex-col justify-center p-4 bg-[#59351f] min-h-screen'>
          {breakFasts?.map(each => <Item key={each._id} data={each}/>)}
        </div>
    </div>
  )
}

export default BreakFasts