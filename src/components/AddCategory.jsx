import { useState } from 'react' 

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue , setInputValue ] = useState('')

    const onInputChange = ( { target } ) =>{
       
        setInputValue(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if( inputValue.trim().length < 2 ) return

        // setCategories( categories => [ inputValue , ...categories ] )

        onNewCategory( inputValue.trim() )

        setInputValue('')
    }

  return (
    <form className='mt-4 p-4 flex flex-col justify-evenly' onSubmit={handleSubmit}>
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
