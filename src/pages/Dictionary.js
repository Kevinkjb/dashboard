import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Dictionary = () =>{
    const [word, setWord] = useState([])
    const navigate = useNavigate()

    const search = (e) =>{
        navigate('/definition/' + word)
    }

    return(
        <>
        <input
            className='my-4 border-1 border-blue-500 p-2 w-[30rem]'
            type='text'
            onChange={(e) => {setWord(e.target.value)}}
        />
        <button className="ml-3 bg-blue-500 p-2 rounded-md text-white text-uppercase" onClick={search}>Search</button>
        
        </>
    )
}

export default Dictionary