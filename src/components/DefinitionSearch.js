import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const DefinitionSearch = () =>{
    const [word, setWord] = useState([])
    const navigate = useNavigate()

    const search = () =>{
        navigate('/dictionary/' + word)
    }

    return(
        <>
        <div className='flex justify-between'>


        <form onSubmit={search}
        className='flex justify-center items-center'
        >
        <input
            placeholder='Search a word'
            className='shrink min-w-0 border-1 border-blue-500 p-2 w-[30rem] rounded-md outline-none'
            type='text'
            onChange={(e) => {setWord(e.target.value)}}
        />
        <button className="ml-3 bg-blue-500 p-2 rounded-md text-white text-uppercase" >Search</button>
        </form>
        </div>
        </>
        )
}

export default DefinitionSearch