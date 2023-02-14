import React, {useState, useEffect} from 'react'


import UserRoutes from "./Routes/userRoutes"
import AdminRoutes from "./Routes/adminRoutes"
import { useAuth } from './contexts/AuthProvided'
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  const {currentUser} = useAuth()
  return (
    <>
      {currentUser == "admin"? <AdminRoutes/> : <UserRoutes/> }
    </>
  )
}
export default App
