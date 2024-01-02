import { useState } from 'react'
import './index.css';
import Employee from './components/Employee';
import { v4 as uuidv4 } from 'uuid';

const  App = ()  => {
  const showEmployee = true
  const [role, setRole] = useState('')
  const [employees, setEmployees] = useState(
    [
      {name: "Kevin", role: "Developer", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {name: "Abby", role: "Developer", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
      {name: "John", role: "Manager", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
    ]
  )
  return (
    <div className="App">
      { showEmployee ? 
        <>
          <input className='border-solid border-2 border-gray-500' type="text" onChange={(e) => {
            setRole(e.target.value)
          }}/>
          <div className='flex flex-wrap justify-center'>
            {
              employees.map((employee) => (
                <Employee 
                  key={uuidv4()}
                  employees={employee}
                />
              ))
            }
          </div>
        </>
        : (
          <p>You cannot see any employees</p>
        )
      }

    </div>
  )
}

export default App
