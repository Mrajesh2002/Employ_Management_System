import { useEffect, useState } from 'react'
import Container from '../components/Container'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TableContent from '../components/TableContent'

const Dashboard = () => {
  const login = JSON.parse(localStorage.getItem('login'))
  const navigate = useNavigate()
  const [allEmp, setAllEmp] = useState([])
  
  async function deleteEmp(id) {
    
    const newEmp = allEmp.filter((emp) => {
      return emp.id != id
    })
    setAllEmp(newEmp)
    console.log(newEmp , "delete")

    try {
      await axios.delete(`http://localhost:4000/api/v1/employ/${id}`)
       
    } catch (e) {
      console.log(e.message)
    }
    
  }


  
  useEffect(() => {
    try {
      getData()
      
    } catch (error) {
      console.log(error.message)
    }
    async function getData() {
      const res = await axios.get(`http://localhost:4000/api/v1/employ`, )
      if (res.data) {
        
        setAllEmp(res.data.emps)
        
        
      }
    }
    getData()
  }, [login])
  return (
    <Container>
      <div className="flex justify-between mb-3">
        <button
          type="button"
          onClick={() => {
            navigate('/create-employee')
          }}
          className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Create User
        </button>
       
      </div>
      <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border border-gray-200 dark:border-gray-600">
    <thead className="text-xs text-white uppercase bg-purple-700 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600">
      <tr>
        <th scope="col" className="px-6 py-3 border-r border-gray-300 dark:border-gray-600">Unique Id</th>
        <th scope="col" className="px-6 py-3 border-r border-gray-300 dark:border-gray-600">Name</th>
        <th scope="col" className="px-6 py-3 border-r border-gray-300 dark:border-gray-600">Email</th>
        <th scope="col" className="px-6 py-3 border-r border-gray-300 dark:border-gray-600">Mobile</th>
        <th scope="col" className="px-6 py-3 border-r border-gray-300 dark:border-gray-600">Role</th>
        <th scope="col" className="px-6 py-3 border-r border-gray-300 dark:border-gray-600">Gender</th>
        <th scope="col" className="px-6 py-3 border-r border-gray-300 dark:border-gray-600">Status</th>
        <th scope="col" className="px-6 py-3 border-r border-gray-300 dark:border-gray-600">Created Date</th>
        <th scope="col" className="px-6 py-3 text-center">Action</th>
      </tr>
            </thead>
            <tbody>
              {allEmp?.map((empdata, idx) => (
                <TableContent
                  key={idx}
                  deleteEmp={deleteEmp}
                  empdata={empdata}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  )
}

export default Dashboard
