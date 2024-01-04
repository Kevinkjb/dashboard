import {useState, useEffect} from 'react'

const Dictionary = () =>{
    const [word, setWord] = useState('')
    useEffect(() => {
        console.log('state updating', word)
    }, [word])

    return(
        <>
        <input
            className='border-1 border-blue-500'
            type='text'
            onChange={(e) => {setWord(e.target.value)}}
        />
        <p>Let's get the definition of {word}</p>
        
        </>
    )
}

export default Dictionary