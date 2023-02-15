import { useState, createContext, useContext, useEffect } from "react"
import * as api from "../api/admin"

type ThemeContextType = {
  currentUser: string,
  signIn:(email: string, password:string)=> void
}

export const AuthContext = createContext<any | null >(null);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setCurrentUser(null)
  }, []);
  const signIn = async(email: string, password:string) =>{
    let {data} = await api.loginAdmin(email, password)
    if(data)
      setCurrentUser(data)
  }
  const value: any = {
    currentUser,
    signIn
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
