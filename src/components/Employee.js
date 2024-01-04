
const Employee = ({employees, editEmployee}) =>{
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
                {/* THIS IS A PROPS THAT IS SEND THROUGH THE APP JS TO GET THE EDIT EMPLOYEE COMPONENTS */}
                {editEmployee}
            </div>
        </div>
        </>
    )
}

export default Employee