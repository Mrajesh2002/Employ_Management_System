import {useNavigate} from 'react-router-dom'

const TableContent = ({ empdata, deleteEmp }) => {
  const role = JSON.parse(localStorage.getItem('role'))
  console.log(role)
  const navigate = useNavigate()
  function editEmp(){
     navigate(`/edit/${empdata.id}`)
  }

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {empdata.id}
      </td>
    
      <td className="px-6 py-4">{empdata.name}</td>
      <td className="px-6 py-4">{empdata.email}</td>
      <td className="px-6 py-4">{empdata.mobile}</td>
      <td className="px-6 py-4">{empdata.role}</td>
      <td className="px-6 py-4">{empdata.gender}</td>
      <td className="px-6 py-4">{empdata.status}</td>
      <td className="px-6 py-4">{empdata.createdate}</td>
      <td className="px-6 py-4 text-right">
      <button
      disabled={role==="user"?true:false}
  style={{
    
    padding: "8px 16px",
    fontSize: "14px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#4caf50",
    color: "white",
    marginRight: "8px",
  }}
  onClick={editEmp}
>
  Edit
</button>
<button
disabled={role==="user"?true:false}
  style={{
    
    padding: "8px 16px",
    fontSize: "14px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#f44336",
    color: "white",
  }}
  onClick={() => deleteEmp(empdata.id)}
>
  Delete
</button>
      </td>
    </tr>
  )
}

export default TableContent
