import { Link } from 'react-router-dom'
import Container from '../components/Container'


const Signin = () => {
  
 
  return (
    <Container >
   <Link to="/admin">
    <button
                  type="button"  
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-4"
                >
                  Admin
                </button>
   </Link>
    <Link to="/user">
   <button
                  type="button"  
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  User
                </button>
   </Link>
    </Container>
  )
}

export default Signin
