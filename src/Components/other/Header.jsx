import React ,{useState} from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState("")

  // if (!data) {
  //   setUsername('Admin')
    
  // }else{
  //   setUsername(data)
  // }

  const logOutUser = ()=>{

    localStorage.setItem('loggedInUser' , '')
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'> username 👍</span></h1>
      <button onClick={logOutUser} className='text-lg font-medium bg-red-500 px-5 py-2 rounded-md text-white'>Log Out </button>
    </div>
  )
}

export default Header
