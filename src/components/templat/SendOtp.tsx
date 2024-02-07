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
        
        if (res?.status === 200) setStep(2)
        if (err) console.log(err);
        
    }

  return (
    <div>
        <form onSubmit={e => submitHandler(e)}>
            <p>enter to account</p>
            <div>
                <label htmlFor="input">phone number</label>
                <input 
                minLength={11}
                maxLength={11}
                type="number" 
                id='input' 
                placeholder='phone number' 
                value={mobile} 
                onChange={e => setMobile(e.target.value)}/>
            </div>
            <div>
                <input type="submit" value={'submit'}/>
            </div>
        </form>
    </div>
  )
}

export default SendOtp