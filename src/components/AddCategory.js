import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCaregories}) => {


    const [inputValue, setInputValue] = useState('');
    const handeInputChnage = (e) => { setInputValue(e.target.value)};

    const handeSubmit = (e) => { 
        e.preventDefault(); 
        if(inputValue.trim().length > 2){
            setCaregories( cats => [inputValue,...cats]);
            setInputValue('');
        }
    };
    return (
        <form onSubmit={handeSubmit}>
            <input type="text" value={inputValue} onChange={handeInputChnage} />

        </form>
    )


}


    
AddCategory.propTypes = {
    setCaregories:PropTypes.func.isRequired
}