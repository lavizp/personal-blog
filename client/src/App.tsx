import React, {useState, useEffect} from 'react'


import UserRoutes from "./Routes/userRoutes"
import AdminRoutes from "./Routes/adminRoutes"

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    <>
      {isLoggedIn? <AdminRoutes/> : <UserRoutes/> }
    </>
  )
}
export default App
