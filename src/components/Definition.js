import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
const Definition = () =>{
    const [word, setWord] = useState()
    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/killer`)
        .then((res) => res.json())
        .then((data) => {
            setWord(data[0].meanings)
            console.log(data[0].meanings)
        }); //NEVER FORGET THE SEMICOLUMN ON THE USEEFFECT
        console.log('page loading')
    },[]);
    return(
        <>
            <h2>Definition: </h2>
            {
                word ? word.map((meaning) => {
                    return <p className="w-96" key={uuidv4()}>
                     {meaning.partOfSpeech}: 
                      {" " + meaning.definitions[0].definition} 
                     </p>
                 }) : null
            }
            
        </>
    )
}

export default Definition