import React, { useState } from 'react'
import { postData } from '../services/axios'

export interface Data {
  name : String,
  price: String,
  description : String,
  image : any
  category : String
}

const CreateItem = () => {
  const [data, setData] = useState<any>({
    name : '',
    price: '',
    description : '',
    image : null,
    category : ''
  })
  
  const onSubmitHandler = async (e : React.FormEvent<HTMLFormElement | HTMLInputElement>) => {
    e.preventDefault()
    console.log(data);
    const formData = new FormData()
    for (let i in data) {
      formData.append(i, data[i])
    }

    const res = await postData(data)

    if (res) {
      alert('ایتم با موفقیت اضافه شد')
    } else {
      alert("مشکلی پیش امده")
    }
    
  }

  const onchangeHandler = (e : any) => {
    const name = e.target.name
    console.log(name);
    
    if (name !== 'image') {
      setData((prev: any) => {
        return {
          ...prev,
          [name] : e.target.value
        }
      })
    } else {
      setData((prev: any) => {
        return {
          ...prev,
          image : e.target.files[0]
        }
      })
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
          <select 
          name="category" 
          className='block w-52 text-right custom-input' 
          onChange={e => onchangeHandler(e)}>
            <option>کتگوری</option>
            <option value="espresso">اسپرسو</option>
            <option value="cold-bar">بار سرد</option>
            <option value="hot-bar">بار گرم</option>
            <option value="ice-bar">آیس بار</option>
            <option value="shakes">شیک</option>
            <option value="tea">چای</option>
            <option value="dami">دمی</option>
            <option value="breakfast">صبحانه</option>
          </select>
        </div>
        <div>
          <textarea className='custom-input' name="description" value={data.description} onChange={e => onchangeHandler(e)} cols={30} rows={10} placeholder='توضیحات' />
        </div>
        <div className='custom-input'>
          <label className='block text-right' htmlFor="img">عکس ایتم</label>
          <input 
          id='img'
          type="file" name='image' 
          accept="image/*"
          placeholder='عکس' 
          onChange={e => onchangeHandler(e)} />
        </div>
        <div>
          <input 
          className='green-btn' 
          type="submit" 
          value={'افزودن'} 
          onSubmit={e =>onSubmitHandler(e)}/>
        </div>
      </form>
    </div>
  )
}

export default CreateItem