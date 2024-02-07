import React, { useState } from 'react'
import SendOtp from '../components/templat/SendOtp'
import CheckOtp from '../components/templat/CheckOtp'

const Auth = () => {
  const [step, setStep] = useState(2)
  const [code, setCode] = useState('')
  const [mobile, setMobile] = useState('')

  return (
    <section className='flex justify-center items-center h-screen'>
      <div className='border-gray-500 border-2 p-5 rounded-md'>
        {step === 1 && <SendOtp setStep={setStep} setMobile={setMobile} mobile={mobile}/>}
        {step === 2 && <CheckOtp code={code} mobile={mobile} setStep={setStep} setCode={setCode}/>}
      </div>
    </section>
  )
}

export default Auth