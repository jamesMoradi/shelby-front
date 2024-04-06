import React from 'react'
import { Data } from './Dashboard'

const Auth = ({setData, setIsAuthed, data} : {
    setData : React.Dispatch<React.SetStateAction<Data>>, 
    setIsAuthed : React.Dispatch<React.SetStateAction<boolean>>,
    data : Data    
    }
    ) => {
  
        
    const onSubmitHandler = () => {
        if (data.username === 'arsham' && data.password === '123456789') {
            setIsAuthed(prev => !prev)
        }
    }


    const onchangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <div>
                <input onChange={e => onchangeHandler(e)} placeholder='username' className='custom-input' value={data.username} type="text" name='username'/>
            </div>
            <div>
                <input onChange={e => onchangeHandler(e)} placeholder='password' className='custom-input' value={data.password} type="password" name='password'/>
            </div>
            <div onClick={onSubmitHandler} className='green-btn'>ورود</div>
        </div>
    )
}

export default Auth