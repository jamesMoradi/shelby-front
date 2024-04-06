import React, { useState } from 'react'
import CreateItem from './CreateItem'
import UpdateItem from './UpdateItem'
import DeleteItem from './DeleteItem'

type Status = 'add' | 'delete' | 'update'

const Panel = () => {
    const [status, setStatus] = useState<Status>('add')
  return (
    <div>
        <div className='flex flex-row justify-between items-center p-4'>
            <button onClick={() => setStatus('add')} className='bg-green-700 text-white p-1 rounded-md'>اضافه کردن ایتم</button>
            <button onClick={() => setStatus('update')} className='bg-yellow-700 text-white p-1 rounded-md'>تغیر دادن ایتم</button>
            <button onClick={() => setStatus('delete')} className='bg-red-700 text-white p-1 rounded-md'>حذف کردن ایتم</button>
        </div>

        <div>
            {status === 'add' && <CreateItem />}
            {status === 'update' && <UpdateItem />}
            {status === 'delete' && <DeleteItem />}
        </div>
    </div>
  )
}

export default Panel