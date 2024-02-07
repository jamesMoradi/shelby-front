import React, { Dispatch, SetStateAction } from 'react'
import { checkOtp } from '../../services/auth'
import { setCookie } from '../../utils/cookie'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useQueryForProfileOptions } from '../../configs/reactQueryConfigs'

type PROPS = {
  code : string
  mobile : string
  setCode : Dispatch<SetStateAction<string>>
  setStep : Dispatch<SetStateAction<number>>
}

const CheckOtp = (props : PROPS) => {
  const navigater = useNavigate()

  const { refetch } = useQuery(useQueryForProfileOptions)
  const {code, mobile, setCode, setStep} = props
  
  const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {err, res} = await checkOtp(code, mobile)
    
    if (res?.status === 200) {
      setCookie(res.data)
      navigater('/dashboard')
      refetch()  
    }

    if (err) console.log(err);
    
  }

  return (
    <div>
      <h1>your mobile is {mobile}</h1>
      <form onSubmit={e => submitHandler(e)}>
        <div>
          <label htmlFor=""></label>
          <input 
          type="number" 
          maxLength={5} 
          minLength={5} 
          value={code} 
          placeholder='code'
          onChange={e => setCode(e.target.value)}/>
        </div>
        <div>
          <button type='submit'>enter</button>
          <button onClick={() => setStep(1)}>edit phone number</button>
        </div>
      </form>
    </div>
  )
}

export default CheckOtp