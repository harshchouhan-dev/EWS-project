import React from 'react'

const AcceptTask = ({data}) => {
//  console.log(data);
 
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl'>
    <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='flex justify-between mt-5'>
        <button className='bg-green-500 rounded p-1'>Mark as completed</button>
        <button className='bg-red-500 rounded p-1'>Mark as failed</button>
      </div>
  </div>
  )
}

export default AcceptTask
