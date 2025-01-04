import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { useState } from 'react'
import Loading from '../components/Loading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const UserLogin = () => {

 const navigate = useNavigate()
  const [errMessage, setErrMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  })
  function handleInput(e) {
    setLoginInfo({ ...loginInfo, [e.target.id]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    try {
      if (loginInfo.username.length < 4) {
        return setErrMessage('username atleast 4 characters')
      } else if (loginInfo.password.length < 6) {
        return setErrMessage('password atleast 6 characters')
      } else {
        setErrMessage('')
      }

      const response = await axios.post(
        `http://localhost:4000/api/v1/signin`,
        {
          username: loginInfo.username,
          password: loginInfo.password,
        }
      )
      if (response.data.login === "success") {
        localStorage.setItem('login', JSON.stringify(response.data.login))
        localStorage.setItem(
          'role',
          JSON.stringify(response.data.role)
        )
        
        navigate('/dashboard')
      } else {
        setErrMessage(response.data.message)
      }
    } catch (error) {
      setErrMessage(error.message)
    }

    setLoading(false)
    return
  }


  return (
    <Container width=" max-w-4xl flex justify-center items-center h-[80vh] "> 
         <form onSubmit={handleSubmit}>
        <h1 className="text-center p-4 text-3xl font-medium">User Login</h1>
        <div className="w-96">
          <input
            onChange={handleInput}
            id="username"
            type="text"
            required
            placeholder="Username"
            className="pl-3 py-2 text-black font-medium w-full rounded-md mb-4"
          />
          <input
            onChange={handleInput}
            type="text"
            required
            id="password"
            placeholder="Password"
            className="pl-3 py-2 text-black font-medium w-full rounded-md mb-4"
          />
        </div>
        <div className="w-96">
          <button
            className="w-full outline-none text-base font-semibold bg-purple-600 p-2 rounded-md"
            type="submit"
          >
            {loading ? <Loading /> : 'User Login'}
          </button>
          <p className="text-red-600">{errMessage}</p>

          <p className="mt-3 text-center">
            Don`t have an account?&nbsp; 
            <Link to={'/signup'}className="text-purple-500 underline font-semibold">Sign Up</Link>
          </p>
        </div>
      </form></Container>
  )
}

export default UserLogin