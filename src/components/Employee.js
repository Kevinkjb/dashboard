const Employee = ({employees}) =>{
    return(
        <>
        <div className="py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 m-5">
            <img 
                className="block mx-auto rounded-full sm:mx-0 sm:shrink-0 object-cover h-[100px] w-[100px]" 
                src={employees.img}
                alt="Woman's Face" 
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
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
            </div>
        </div>
        </>
    )
}

export default Employee