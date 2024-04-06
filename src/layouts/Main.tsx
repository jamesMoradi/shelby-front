import React from 'react'
import Sidebar from './Sidebar'
import Home from './Home'

const Main = () => {
  return (
    <main className='h-screen overflow-hidden flex flex-row p-5 bg-[#59351f]'>
        <Sidebar />
        <Home />
    </main>
  )
}

export default Main