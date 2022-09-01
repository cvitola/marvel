import Head from './Components/Head';
import {useEffect, useState} from 'react';
import { getAllCharacters } from './utils/api-marvel';

function App() {

    const [data, setData] = useState([]);
    const [mh, setMh] = useState("");

    const obtenerPersonajes = async() => {
      const response = await getAllCharacters()
      setData(response);
    }

    const handleOnChange = (e) => {
      setMh(mh);
      console.log(e.target.value)
    }
    useEffect( ()  => {
      console.log("effect")
       //obtenerPersonajes();
      }, [])
  
  return (
    <>
       <Head />
        <ul>
            {
              !data?  "nada por aqui ..." : data.map((item) => <li key={item.id}>{item.id}</li>)
            }
            {
               console.log(data)
            }
        </ul>
         <input placeholder='escribir algo porque si' onChange={handleOnChange} name={mh}/> 
        
    </>

  );
}

export default App;
