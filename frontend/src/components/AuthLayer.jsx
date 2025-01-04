import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const AuthLayer = ({ children, isAuthReq = false }) => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'))|| ''


    

    if (!isAuthReq && login === "success") {
      navigate('/dashboard')
    } else if (isAuthReq && !login) {
      navigate('/signin')
    }
  }, [isAuthReq, navigate])
  return <div>{children}</div>
}

export default AuthLayer
