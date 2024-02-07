import React, { useState } from 'react'
import SendOtp from '../components/templat/SendOtp'
import CheckOtp from '../components/templat/CheckOtp'

const Auth = () => {
  const [step, setStep] = useState(1)
  const [code, setCode] = useState('')
  const [mobile, setMobile] = useState('')

  return (
    <div>
      <h1>auth page</h1>
      {step === 1 && <SendOtp setStep={setStep} setMobile={setMobile} mobile={mobile}/>}
      {step === 2 && <CheckOtp code={code} mobile={mobile} setStep={setStep} setCode={setCode}/>}
    </div>
  )
}

export default Auth