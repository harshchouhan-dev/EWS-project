import React, { useEffect, useState, useContext} from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'


function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData , setLoggedInUserData] = useState()
  const [userData , setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
   
   
      if(loggedInUser){
          
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
        
    }
  }, [])
  

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      
      localStorage.setItem('loggedInUser' , JSON.stringify({role: 'admin'}))
    }
    else if (userData) {
      const employee =  userData.find((e)=> e.email == email && e.password == password)
      if (employee) {
        setLoggedInUserData(employee)
      
        
        setUser('employee')
        localStorage.setItem('loggedInUser' , JSON.stringify({role: 'employee', data: employee}))
     
      }

    } else {
      alert('invalid')
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee'? <EmployeeDashboard  changeUser={setUser} data={loggedInUserData}/> : 'null')}
    </>
  )
}

export default App
