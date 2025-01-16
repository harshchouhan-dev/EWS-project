import React ,{useState, useContext} from 'react'
import { AuthContext } from '../../Context/AuthProvider'


const CreateTask = () => {

  const [userData , setUserData] = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  // const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
   e.preventDefault()
    // console.log("task created");


    const setNewTask= {title , description , category , date , active: false , newTask: true , completed: false , failed: false}
    
    const data = userData
    
    
    data.forEach((elem) => {
      if(assignTo == elem.firstName){
        elem.tasks.push(setNewTask)
        elem.taskNumber.newTask =  elem.taskNumber.newTask+1
      }; 
    });
    
    setUserData(data)
    console.log(data);

    setAssignTo('')
    setCategory('')
    setDate('')
    setDescription('')
    setTitle('')

  }
  return (
    <div>
         <form onSubmit={submitHandler}
           
         
         className='flex justify-between bg-[#1C1C1C] p-5 mt-10 rounded-md'>
       <div className='flex flex-col 0 w-1/2'>
       <div className='mb-5'>
            <h3>Task Title</h3>
            <input
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            className='p-1 w-[75%] bg-transparent border-2 border-gray-400 rounded-md outline-none' type="text" placeholder='Make a UI design'
             />
        </div>
        <div className='mb-5'>
            <h3>date</h3>
            <input 
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            className='p-1 w-[75%] bg-transparent border-2 border-gray-400 rounded-md outline-none' type="date" />
        </div >
        <div  className='mb-5'>
            <h3>Assign to</h3>
            <input
            value={assignTo}
            onChange={(e)=> setAssignTo(e.target.value)}
             className='p-1 w-[75%] bg-transparent border-2 border-gray-400 rounded-md outline-none' type="text" placeholder='employee name' />
        </div>
        <div  className='mb-5'>
            <h3>Category</h3>
            <input 
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            className='p-1 w-[75%] bg-transparent border-2 border-gray-400 rounded-md outline-none' type="text" placeholder='design , dev ,etc' />
        </div>
        
       </div>
       <div className=' w-1/2'>
       <div className='flex flex-col h-[75%]  m-2 ' >
            <h3 className='text-sm'>Description</h3>
            <textarea 
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            className='outline-none h-full  bg-transparent border-2 border-gray-400 rounded-md ' ></textarea>
        </div>
        <div className='bg-emerald-500 m-1 rounded-md text-center p-2 hover:bg-emerald-600'>
            <button>Create Task</button>
        </div>
       </div>
    </form>
    </div>
  )
}

export default CreateTask
