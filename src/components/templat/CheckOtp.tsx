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

  //const { refetch } = useQuery(useQueryForProfileOptions)
  const {code, mobile, setCode, setStep} = props
  
  console.log('checkkkkk');
  

  const submitHandler = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {err, res} = await checkOtp(code, mobile)
    
    if (res?.status === 200) {
      setCookie(res.data)
      navigater('/dashboard')
  //    refetch()  
    }

    if (err) console.log(err);
    
  }

  return (
    <>
    <div>
      <div className='mb-5'>
        <h1 className='font-bold text-xl mb-2'>sign in to your account</h1>
        <p className='text-sm text-gray-500'>enter the code we sent to {mobile}</p>
      </div>
      <form onSubmit={e => submitHandler(e)}>
        <div className='mb-5'>
          <label htmlFor="otp" className='font-bold text-xl mb-2'>Enter the OTP</label>
          <input 
          className='border-gray-500 border-2 block w-80 my-2 
          p-[4px] rounded-md focus:outline-none focus:border-blue-500'
          type="number" 
          maxLength={5} 
          minLength={5} 
          value={code}
          id='otp' 
          placeholder='code'
          onChange={e => setCode(e.target.value)}/>
        </div>
        <div>
          <button className='bg-red-800 block mb-2 text-white py-[4px] px-5 rounded-md cursor-pointer' type='submit'>Enter</button>
          <button className='text-red-800 block py-[4px] px-5 rounded-md cursor-pointer border-red-800 border-[1px]' onClick={() => setStep(1)}>Edit phone number</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default CheckOtp