import React, { useState } from 'react'
import { postData, updateData } from '../services/axios'

export interface Data {
  name ?: String,
  price ?: String,
  description ?: String
}

const UpdateItem = () => {
  const [data, setData] = useState<any>({
    name : '',
    price: '',
    description : '',
  })
  
  const onSubmitHandler = async (e : React.FormEvent<HTMLFormElement | HTMLInputElement>) => {    
    e.preventDefault()
    let filteredData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != ''));
    
    const res = await updateData(filteredData)
    if (res) {
      alert('ایتم با موفقیت تغیر پیدا کرد')
    } else {
      alert("مشکلی پیش امده")
    }
  }

  const onchangeHandler = (e : any) => {
      setData((prev: any) => {
        return {
          ...prev,
          [e.target.name] : e.target.value
        }
      })
  }

  return (
    <div className='p-5'>
      <form className='flex flex-col justify-end items-end gap-5' onSubmit={e => onSubmitHandler(e)}>
        <div>
          <input 
          className='custom-input' 
          type="text" name='name' 
          placeholder='نام ایتم' 
          value={data.name} 
          onChange={e => onchangeHandler(e)} />
        </div>
        <div>
          <input 
          className='custom-input' 
          type="number" name='price' 
          placeholder='قیمت' 
          value={data.price} 
          onChange={e => onchangeHandler(e)} />
        </div>
        <div>
          <textarea className='custom-input' name="description" value={data.description} onChange={e => onchangeHandler(e)} cols={30} rows={10} placeholder='توضیحات' />
        </div>
        
        <div>
          <input 
          className='green-btn' 
          type="submit" 
          value={'تغیر دادن'} 
          onSubmit={e =>onSubmitHandler(e)}/>
        </div>
      </form>
    </div>
  )
}

export default UpdateItem