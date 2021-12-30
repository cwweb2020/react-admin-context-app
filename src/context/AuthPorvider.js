import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

 export const AuthContext = createContext()


const AuthPorvider = ({children}) => {
    const auth = localStorage.getItem('token')
    const [token, setToken] = useState(auth || null)
    const navigate = useNavigate();
    
    const login = (loginData) => {
        if (loginData.name === "admin" && loginData.pass === "admin") {
            setToken('admin')
            localStorage.setItem("token", JSON.stringify("admin"));
            navigate('/information')
       }else{
           alert("Invalid credentials");
       }
    }


    return (
        <>
            <AuthContext.Provider value={{ token, login }}>
               {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthPorvider
