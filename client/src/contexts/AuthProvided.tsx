import { useState, createContext, useContext, useEffect } from "react"
import * as api from "../api/admin"

type ThemeContextType = {
  currentUser: string | null,
  signIn:(email: string, password:string)=> void
}

const defaultState = {
  currentUser: null,
  signIn: ()=> {}
}

export const AuthContext = createContext<ThemeContextType >(defaultState);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let user = localStorage.getItem("currentUser")
    if(user){

      setCurrentUser(user)
    }else{
      setCurrentUser(null)
    }
  }, []);
  const signIn = async(email: string, password:string) =>{
    let {data} = await api.loginAdmin(email, password)
    if(data){
      console.log(data)
      
      localStorage.setItem("currentUser", data)
      setCurrentUser(data)
    }
  }
  const value: any = {
    currentUser,
    signIn
  }
  return (
    <AuthContext.Provider value={{currentUser, signIn}}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
