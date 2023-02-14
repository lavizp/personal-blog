import { useState, createContext, useContext } from "react"
type ThemeContextType = {
  currentUser: string,
  signIn:()=> void
}

const defaultState = {
  currentUser: "user",
  signIn: ()=>{}
}
export const AuthContext = createContext<ThemeContextType>(defaultState);

export function useAuth() {
  return useContext(AuthContext);
}

interface Props{
  children?: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string>("user")
  const signIn = () =>{
    setCurrentUser("admin")
  }
  return (
    <AuthContext.Provider value={{ currentUser,  signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
