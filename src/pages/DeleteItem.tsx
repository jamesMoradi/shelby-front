import React, { useState } from 'react'
import { deleteData } from '../services/axios'

const UpdateItem = () => {
  const [name, setName] = useState('')
  
  const onSubmitHandler = async (e : React.FormEvent<HTMLFormElement | HTMLInputElement>) => {    
    e.preventDefault()
    
    const res = await deleteData(name)
    if (res) {
      alert('ایتم با موفقیت حذف شد')
    } else {
      alert("مشکلی پیش امده")
    }
  }

  return (
    <div className='p-5'>
      <form className='flex flex-col justify-end items-end gap-5' onSubmit={e => onSubmitHandler(e)}>
        <div>
          <input 
          className='custom-input' 
          type="text" name='name' 
          placeholder='نام ایتم' 
          value={name} 
          onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <input 
          className='green-btn' 
          type="submit" 
          value={'حذف کردن'} 
          onSubmit={e =>onSubmitHandler(e)}/>
        </div>
      </form>
    </div>
  )
}

export default UpdateItem