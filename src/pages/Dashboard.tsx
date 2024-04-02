import React, { useState } from 'react'
import Auth from './Auth'

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
        <div>dashboard</div> : 
        <Auth setData={setUserData} setIsAuthed={setIsAuthed}  data={userData}/>
        }
    </section>
  )
}

export default Dashboard