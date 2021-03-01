import React,{useState}  from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import GifGrig from './components/GifGrid';

const GifExpertApp  = ({ }) => {
    //const caregories = ['One Punch','Samurai X','Dragon Ball'];

    const [categories, setCaregories] = useState(['One Punch']);

    /*
    const handleAdd = () =>{
        setCaregories( [...categories,'One Peace']);
        //setCaregories( cats => [...categories,'One Peace']);
    }
    */
    return (    
        <>
        <h2>GifExpertApp</h2>
        <AddCategory  setCaregories={setCaregories}/>
        <hr />
        <ol>
            {
                categories.map((category,i) =>(
                    <GifGrig key={category} category={category}/>
                    //return <li key={category}>{category}</li>
                ))
            }
        </ol>
        </>
    );
    
}
GifExpertApp.propTypes = {
   
}


export default GifExpertApp;
