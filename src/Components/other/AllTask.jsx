import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {

  const [userData , setUserData] = useContext(AuthContext)
  // console.log(authData.employees);

  return (
    <div className='bg-[#1c1c1c] mt-3 p-5  '>
      <div className='flex justify-between bg-red-400 py-2 px-4 rounded mb-2'>
        <h2 className='text-lg font-medium w-1/5'>Employees Name</h2>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5'>Failed</h5>
      </div>
    <div className='overflow-auto '>
    {userData.map(function (elem ,idx) {
        return <div key={idx} className='flex justify-between border-emerald-500 border-2  py-2 px-4 rounded mb-2'>
          <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
          <h3 className='text-lg font-medium text-blue-600 w-1/5'>{elem.taskNumber.newTask}</h3>
          <h5 className='text-lg font-medium text-yellow-400 w-1/5'>{elem.taskNumber.active}</h5>
          <h5 className='text-lg font-medium  w-1/5'>{elem.taskNumber.completed}</h5>
          <h5 className='text-lg font-medium text-red-600 w-1/5'>{elem.taskNumber.failed}</h5>
        </div>
       })}
    </div>
    </div>



  )
}

export default AllTask
