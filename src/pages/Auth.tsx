import React from 'react'
import { Data } from './Dashboard'

const Auth = ({setData, setIsAuthed, data} : {
    setData : React.Dispatch<React.SetStateAction<Data>>, 
    setIsAuthed : React.Dispatch<React.SetStateAction<boolean>>,
    data : Data    
    }
    ) => {
  
        
    const onSubmitHandler = () => {
        if (data.username === '' && data.password === '') {
            setIsAuthed(prev => !prev)
        }
    }

    return (
        <div>
            <div>
                <input type="text" name='username'/>
            </div>
            <div>
                <input type="password" name='password'/>
            </div>
            <div onClick={onSubmitHandler}>submit</div>
        </div>
    )
}

export default Auth