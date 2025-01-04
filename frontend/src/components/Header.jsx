import Signup from '../pages/Signup'
import Container from './Container'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const login = localStorage.getItem('login')


  const navigate = useNavigate()
  function logout() {
    localStorage.removeItem('login')
    localStorage.removeItem('role')
    
    navigate('/signin')
  }

  return (
    <Container>
      <div className="px-4 flex justify-between items-center">
        <Link to={'/dashboard'}>
        <span className="text-3xl font-semibold italic text-shadow-transition">
      Role-Based Access Control
    </span>
        </Link>
        <div>
          {login ? (
            <span>
              {`Hari - `}
              <button
                onClick={logout}
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Logout
              </button>
            </span>
          ) : (
            <div className='flex justify-center gap-3'>
            <span>
              <Link to={'/signup'}>
                <button
                  type="button" onClick={Signup} id="sinup"
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Signup
                </button>
              </Link>
            </span>
            <span>
              <Link to={'/signin'}>
                <button
                  type="button" onClick={Signup} id="sinup"
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  SignIn
                </button>
              </Link>
            </span>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Header
