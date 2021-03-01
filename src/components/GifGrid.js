//import React,{useState,useEffect} from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export default function GifGrig({category}) {
    
    const {data,loading} = useFetchGifs(category);

    /*
    const [images, setImages] = useState([])
    const [count, setCount] = useState(0)
    useEffect( () =>{
        getGifs(category)
        .then(imgs => setImages(imgs))
    },[category ])
    */
 

    return (
        <>
            <h2 className="animate__animated animate__fadeIn">{category}</h2>
            { loading &&  <h2 className="animate__animated animate_flash">Loading</h2> }
            {/*<h2>{ loading ? 'Cargando...' : 'Data Cargada'}</h2>*/}
           <div className="card-grid">
                {data.map((img) =>(
                    <GifGridItem key={img.id} {...img}/>
                    //<li key={img.id}>{img.title}</li>
                ))
                
                }
            </div>
        </>

    )
}
