import { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const EmpDetail = ({ type = 'edit' }) => {
  const [loading, setLoading] = useState(type === 'edit')
  const { id } = useParams()

  const [empData, setEmpData] = useState({
   id,
    role: 'User',
    email: '',
    gender: 'Male',
    status:'Active',
    mobile: '',
    name: '',
  })
  useEffect(() => {
    async function getEmpById() {

      if (type == 'edit') {
        const response = await axios.get(
          `http://localhost:4000/api/v1/employ-id/${id}`,
       
        )

        if (response.data.emps) {
          setEmpData(response.data.emp)
          setLoading(false)
        } else {
          setErrorMessage(response.data.message)
          setLoading(false)
        }
      }
    }
    getEmpById()
  }, [id, type])

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')


 

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(empData)
    try {

  

      if (type === 'edit') {
        await axios.put(`http://localhost:4000/api/v1/employ`,empData )
      } else {
        await axios.post(`http://localhost:4000/api/v1/employ`,empData)
      }
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message)
    }
  }

  if (errorMessage) {
    ;<div>
      <h1 className="text-center m-6">{errorMessage}</h1>
    </div>
  }
  if (loading || !empData) {
    return (
      <div>
        <h1 className="text-center m-6">Loading...</h1>
      </div>
    )
  }
  return (
    <Container width="max-w-4xl">
      <form onSubmit={handleSubmit} >
        <div className="w-64">
          <p className=" my-2  ">Name</p>
          <input
            onChange={(e) =>
              setEmpData({ ...empData, [e.target.id]: e.target.value })
            }
            className="outline-none w-full rounded-sm p-1 text-black"
            type="text"
            id="name"
            name="name"
            value={empData.name}
            required
          />
          <p className=" mt-2 ">Email</p>
          <input
            onChange={(e) =>
              setEmpData({ ...empData, [e.target.id]: e.target.value })
            }
            className="outline-none  w-full  rounded-sm p-1 text-black"
            type="email"
            id="email"
            name="email"
            value={empData.email}
            
          />
          <p className=" mt-2 ">Mobile No</p>
          <input
            className="outline-none  w-full  rounded-sm p-1 text-black"
            onChange={(e) =>
              setEmpData({ ...empData, [e.target.id]: e.target.value })
            }
            type="tel"
            id="mobile"
            value={empData.mobile}
            name="mobile"
            pattern="[0-9]{10}"
          />

          <p className=" mt-2 ">Role</p>
          <select
            className="text-black"
            required
            onChange={(e) =>
              setEmpData({ ...empData, [e.target.id]: e.target.value })
            }
            defaultValue={'User'}
            name="role"
            selected={empData.designation}
            id="role"
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <p className=" mt-2 " id="gender" name="gender">
            Gender
          </p>
          <input
            onChange={(e) =>
              setEmpData({ ...empData, [e.target.id]: e.target.value })
            }
            type="radio"
            name="gender"
            checked={empData.gender === 'Male'}
            id="gender"
            value={'Male'}
          />
          <label htmlFor="M">Male</label>
          <input
            onChange={(e) =>
              setEmpData({ ...empData, [e.target.id]: e.target.value })
            }
            type="radio"
            name="gender"
            id="gender"
            checked={empData.gender === 'Female'}
            value={'Female'}
          />
          <label htmlFor="F">Female</label>

          <p name="status" id="status" className=" mt-2 ">
            Status
          </p>
          <p>{empData.status}</p>
          <select
            className="text-black"
            required
            onChange={(e) =>
              setEmpData({ ...empData, [e.target.id]: e.target.value })
            }
            defaultValue={'Active'}
            name="status"
            selected={empData.designation}
            id="status"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="mt-4">
          {type ? (
            <button
              type="submit"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              {type === 'create' ? 'Create' : 'Update'}
            </button>
          ) : (
            <button
              type="submit"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Update
            </button>
          )}
        </div>
      </form>
    </Container>
  )
}



export default EmpDetail
