import { useState } from 'react' 

export const AddCategory = ( { setCategories } ) => {

    const [ inputValue , setImputValue ] = useState('')

    const onInputChange = ( { target } ) =>{
        console.log(target.value)
        setImputValue(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
        setCategories( categories => [ inputValue , ...categories ] )
    }

  return (
    <form className='p-4' onSubmit={handleSubmit}>
            <input
                className='p-2 rounded-md'
                type="text"
                placeholder="Search your gif here..." 
                value={inputValue}
                onChange={onInputChange}
            />
            <button className='m-4 p-2 bg-orange-50 rounded-md'>Agregar</button>
    </form>
  )
}
