

import UserRoutes from "./Routes/userRoutes"
import AdminRoutes from "./Routes/adminRoutes"
import { useAuth } from './contexts/AuthProvided'
function App() {
  const {currentUser} = useAuth()
  return (
    <>
      {currentUser? <AdminRoutes/> : <UserRoutes/> }
    </>
  )
}
export default App
