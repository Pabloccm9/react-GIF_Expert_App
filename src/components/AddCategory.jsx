import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
    
    const onInputChange = (event) => {
        setInputValue( event.target.value);
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar GIF" 
            value={ inputValue }
            onChange= { onInputChange }
        /> 
    </form>
  )
}
