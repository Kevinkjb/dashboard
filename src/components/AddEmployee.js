

import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

function AddEmployee({employees, NewEmployee}) {
    const [img, setImg] = useState(employees.img)
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
        <button 
        class="bg-purple-500 hover:bg-purple-600 font-semibold py-2 px-4 border text-white rounded" 
        onClick={handleShow}>
        + New Employee
        </button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form 
            onSubmit={(e) =>{
                handleClose()
                e.preventDefault()
                // THIS GRABS THE DATA PASS FROM MAIN FILE APP.JS WHICH HAS BEEN OBJECT DESTRUC
                NewEmployee(name, role, img)

                // THIS RESET THE VALUE OF THE INPUT WHEN SUBMITTED
                setRole('')
                setName('')
                setImg('')
                setRole('')
                setName('')
            }}
            id="editmodal" 
            className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="full-name">
                    Full Name
                </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="full-name" 
                        type="text" 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                    Role
                </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="role" 
                        type="text" 
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="img">
                    Image URL
                </label>
                </div>
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="img" 
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </div>
            </div>

        </form>
        </Modal.Body>
        <Modal.Footer>
        <button 
            className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'
            onClick={handleClose}
        >
            Close
          </button>
          <button
            className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded' 
            form='editmodal'>Add
          </button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;