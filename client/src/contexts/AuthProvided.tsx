import { useState, createContext, useContext } from "react"
type ThemeContextType = {
  currentUser: string,
  signIn: void
}
const AuthContext = createContext<ThemeContextType>({currentUser: "user", signIn:()=>{} });


export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvided({children}: any) {
  const [currentUser, setCurrentUser] = useState("user");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = ()=>{
    setCurrentUser("admin")
  }

  const value = {
    currentUser,
    signIn
  }
  return (
    <AuthContext.Provider value={value}>
    {!isLoading && children}
  </AuthContext.Provider>
  )
}

export default AuthProvided