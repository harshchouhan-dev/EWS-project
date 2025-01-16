import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5'>
      <div className='h-40 w-[45%] bg-red-400 mt-5 rounded-xl px-9 py-7'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-green-400 mt-5 rounded-xl px-9 py-7'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className='h-40 w-[45%] bg-blue-400 mt-5 rounded-xl px-9 py-7'>
        <h2 className='text-3xl font-semibold'>{data.taskNumber.active}</h2>
        <h3 className='text-xl font-medium'>Active</h3>
      </div>
      <div className='h-40 w-[45%] bg-yellow-400 mt-5 rounded-xl px-9 py-7'>
        <h2 className='text-3xl font-semibold text-black'>{data.taskNumber.failed}</h2>
        <h3 className='text-xl font-medium text-black'>Failed</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
