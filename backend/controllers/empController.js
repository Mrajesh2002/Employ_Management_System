const emps = [
  {
    id:1,
    name:"raj",
    email:"raj@gmail.com",
    mobile:"9032805933",
    role:"user",
    gender:"male",
    status:"Active",
    createdate:"2/12/2024",

    
  },{
    id:2,
    name:"akr",
    email: "akr@gmail.com",
    mobile:"9023080593",
    role:"user",
    gender:"male",
    status:"Active",
    createdate:"3/12/2024",
  },{
    id:3,
    name:"hari",
    email:"hari@gmail.com",
    mobile:"8452805933",
    role:"user",
    gender:"male",
    status:"Inactive",
    createdate:"4/12/2024",
    
  }
]

exports.getAllEmploys = async (req, res) => {
 res.json({emps}) 
}

exports.addEmploy = async (req, res) => {
  const { name, email, mobile, role, gender, status} = req.body
  try {
    const id = emps.length
    emps.push({id,name, email, mobile, role, gender, status ,createdate:new Date()})
    
    
    return res.json({
      success: true,
      employ,
    })
  } catch (e) {
    console.log(e.message)
    return res.json({
      success: false,
      message: e.message,
    })
  }
}

exports.updateEmploy = async (req, res) => {
  const { id, name, email, mobile, role, gender, status } = req.body;

  try {
    const empIndex = emps.findIndex(emp => emp.id === parseInt(id));
    if (empIndex === -1) {
      return res.json({
        success: false,
        message: "Employee not found",
      });
    }

    emps[empIndex] = {
      ...emps[empIndex],
      name: name || emps[empIndex].name,
      email: email || emps[empIndex].email,
      mobile: mobile || emps[empIndex].mobile,
      role: role || emps[empIndex].role,
      gender: gender || emps[empIndex].gender,
      status: status || emps[empIndex].status,
    };

    return res.json({
      success: true,
      employ: emps[empIndex],
    });
  } catch (error) {
    console.error(error.message);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};


exports.deleteEmploy = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const empIndex = emps.findIndex(emp => emp.id === id);

    if (empIndex === -1) {
      return res.json({
        success: false,
        message: "Employee not found",
      });
    }

    const deletedEmp = emps.splice(empIndex, 1);

    return res.json({
      success: true,
      message: "Delete Success",
      deletedEmployee: deletedEmp[0],
    });
  } catch (error) {
    console.error(error.message);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id
    const emp = emps.find({id})
    console.log(emp)
  
    const conEmp = {
      name: emp.f_Name,
      email: emp.f_Email,
      id: emp.f_Id,
      image: emp.f_Image,
      mobile: emp.f_Mobile,
      designation: emp.f_Designation,
      gender: emp.f_gender,
      course: emp.f_Course,
    }
    return res.json({
      success: true,
      emp: conEmp,
    })
  } catch (e) {
    return res.json({
      success: false,
      message: 'Record not exist',
    })
  }
}

exports.searchEmploy = async (req, res) => {
  try {
    const search = req.params.search
 
    let searchEmp

    return res.json({
      success: true,
      searchEmp,
    })
  } catch (e) {
    console.log(e.message)

    return res.json({
      success: false,
      message: 'Record not exist',
    })
  }}