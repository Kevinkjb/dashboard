import { useState } from 'react'
import './index.css';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import { v4 as uuidv4 } from 'uuid';


const  App = ()  => {

  //IF FALSE THE DATA WONT SHOW UNLESS IT HAS THE ADMIN ACCESS.
  // THIS IS HARD CODED VALUE WHICH WILL CHANGE LATER
  const showEmployee = true

  const [employees, setEmployees] = useState(
    [
      {id: 1, name: "Kevin", role: "Developer", img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id: 2, name: "Abby", role: "Developer", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id: 3, name: "John", role: "Manager", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id: 4, name: "Kia", role: "Developer", img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id: 5, name: "Joy", role: "Developer", img: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {id: 6, name: "Ray", role: "Manager", img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
    ]
  )

  function updateEmployee(id, newName, newRole){
    console.log('This is updating')

    //MAP THROUGHT EMPLOYEES TO CHECK THE CONDITION
    const updateEmployee = employees.map(employee => {
      if(id === employee.id){
        //CREATES A NEW ARRAY THAT PASS INTO THE EDIT EMPLOYEE AND REPLACE THE NEW VALUE
        return {...employee, name: newName, role: newRole}
      }
      //ELSE WILL JUST RETURN INTO A PREVIOS OR CURRENT VALUE
      return employee
    })
    //SUMBITS INTO THE UPDATED FUNCTION WHICH SENDS INTO THE EDIT EMPLOYEE
    setEmployees(updateEmployee)
  }


  // ADDING NEW DATA INTO THE EXISTING OBJECT
  function NewEmployee(name, role, img){
    const newEmployee = {
      //GENERATES A RANDOM ID
      id: uuidv4(),
      name: name, //GRABS THE NAME PARAMETER THAT COMES FROM THE COMPONENT ADD EMPLOYEE
      role: role, //GRABS THE ROLE PARAMETER THAT COMES FROM THE COMPONENT ADD EMPLOYEE
      img: img, //GRABS THE IMG PARAMETER THAT COMES FROM THE COMPONENT ADD EMPLOYEE
    };
    setEmployees([...employees, newEmployee]);
  }
  return (
    <div className="App">
      { showEmployee ? 
        <>
          <div className='flex flex-wrap justify-center'>
            {
              employees.map((employee) => (
                <Employee 
                  key={employee.id}

                  //SENDS AN ID INTO THE EDIT EMPLOYEE WHICH CHECKS THE CONDITION IF IT MATCHES
                  id={employee.id}
                  //OBJECT DESTRUCTURING WHICH SENDS THE DATA INTO THE EMPLOYEE INFO TO RENDER
                  employees={employee}
                  //THIS GIVES THE MAIN FILE STATE TO PASS IN OR RENDER INTO THE EMPLOYEE TO UPDATE THE EXISTING DATA
                  updateEmployee={updateEmployee}
                />
              ))
            }
          </div>
        </>
        : (
          <p>You cannot see any employees</p>
        )
      }

      {/* THIS IS THE COMPONENT WHICH PASS IN A PROPS INTO THE ADD EMPLOYEE COMPONENT */}
      <AddEmployee 
        employees={employees}
        NewEmployee={NewEmployee}
      />
    </div>
  )
}

export default App
