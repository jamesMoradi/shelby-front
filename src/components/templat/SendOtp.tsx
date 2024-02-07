import React, { Dispatch, SetStateAction } from 'react'
import { sendOtp } from '../../services/auth'

type PROPS = {
    setStep : Dispatch<SetStateAction<number>>,
    setMobile : Dispatch<SetStateAction<string>>,
    mobile : string
}

const SendOtp = (props : PROPS) => {
    const {mobile, setMobile, setStep} = props

    const submitHandler = async (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {err, res} = await sendOtp(mobile)
        
        console.log(res);
        
        if (res?.status === 200) setStep(2)
        if (err) console.log(err);
        
    }

  return (
    <>
        <div className='my-5'>
            <h1 className='font-bold text-xl mb-2'>sign in to your account</h1>
            <p className='text-gray-500 text-sm'>For using our services enter your account</p>
        </div>
        <form onSubmit={e => submitHandler(e)}>
            <div className='mb-5'>
                <label htmlFor="input" className='block font-bold text-xl'>phone number</label>
                <input 
                className='border-gray-500 border-2 block w-80 my-2 
                p-[4px] rounded-md focus:outline-none focus:border-blue-500'
                minLength={11}
                maxLength={11}
                type="number" 
                id='input' 
                placeholder='phone number' 
                value={mobile} 
                onChange={e => setMobile(e.target.value)}/>
            </div>
            <div>
                <input 
                type="submit" 
                value={'submit'} 
                className='bg-red-800 text-white py-[4px] px-5 rounded-md cursor-pointer'/>
            </div>
        </form>
    </>
  )
}

export default SendOtp