import React, { useState } from 'react'
import Auth from './Auth'
import Panel from './Panel'

export interface Data {
    username : string
    password : string
}

const Dashboard = () => {
    const [isAuthed, setIsAuthed] = useState(false)
    const [userData, setUserData] = useState<Data>({
        username : '',
        password : ''
    })


  return (
    <section>
        {isAuthed ? 
        <Panel /> : 
        <Auth setData={setUserData} setIsAuthed={setIsAuthed}  data={userData}/>
        }
    </section>
  )
}

export default Dashboard