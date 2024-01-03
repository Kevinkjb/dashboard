import EditEmployee from "./EditEmployee"


const Employee = ({employees, setEmployees, updateEmployee, id}) =>{
    return(
        <>
        <div className="min-w-[350px] max-w-[350px] py-8 px-8  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-4">
            <img 
                className="block mx-auto rounded-full sm:mx-0 sm:shrink-0 object-cover h-[100px] w-[100px]" 
                src={employees.img}
                alt={employees.name}
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {employees.name}
                </p>
                <div className="text-slate-500 font-medium">
                    {
                        employees.role ? <p>{employees.role}</p> : <p>No role</p>
                    }
                </div>
                </div>
                    <EditEmployee
                    // THIS ID WAS GRAB MAIN FILE APP TO BE ABLE TO RENDER IT INTO EDIT COMPONENTS
                    id={id}
                    // THIS EMPLOYEE GRABS THE MAIN FILE APP TO BE ABLE TO RENDER AND MAP IT INTO EDIT COMPONENTS
                    employees={employees}
                    //THIS GRABS THE FUNCTION FROM APP JS TO GIVES AN ACCESS TO EDIT EMPLOYEE COMPONENTS TO RENDER AND ACCESS THE FUNCTION
                    updateEmployee={updateEmployee}
                    />

               
            </div>
        </div>
        </>
    )
}

export default Employee