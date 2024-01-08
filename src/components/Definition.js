import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import NotFound from "./NotFound";
import DefinitionSearch from "./DefinitionSearch";

const Definition = () =>{
    const [word, setWord] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [error, setError] = useState(false)
    let {search} = useParams();
    const navigate = useNavigate()


    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
        .then((res) => {
            if(res.status === 404){
                setNotFound(true)
            }
            else if(res.status === 401){
                navigate('/')
            }
            else if(res.status === 500){
                navigate('/dictionary')
            }
            if(!res.ok){
                setError(true)
                throw new Error('Something Went wrong')
            }
            return res.json();
        })

        .then((data) => {
            setWord(data[0]?.meanings);

        }) //NEVER FORGET THE SEMICOLUMN ON THE USEEFFECT
        .catch((e)=>{
            console.log(e.message)
        })
        console.log('page loading');
    },[]);

        if(notFound === true){
            return (
            <>
            <NotFound/>
            <button 
            className="bg-blue-500 p-2 rounded-md text-white text-uppercase w-[10rem]"
            onClick={() => navigate('/dictionary')}>
                Search Again
            </button>
            </>
            )
        }
        if(error === true){
            return (
            <>
            <p>Something is wrong, please try again?</p>
            <button 
            className="bg-blue-500 p-2 rounded-md text-white text-uppercase w-[10rem]"
            onClick={() => navigate('/dictionary')}>
                Search Again
            </button>
            </>
            )
        }
    return(
        <>

            {
                word ? 
                <>
                <h2>Definition: </h2>
                { word.map((meaning) => {
                        return <p className="w-96" key={uuidv4()}>
                        {meaning.partOfSpeech}: 
                        {" " + meaning.definitions[0].definition} 
                        </p>
                    }) 
                    }
                 </>
                 : null
                 
            }
            <strong>
                <p>Search again:</p>
            </strong>
            <DefinitionSearch />
            
        </>
    )
}

export default Definition