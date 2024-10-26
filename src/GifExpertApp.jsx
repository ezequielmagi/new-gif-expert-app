import { useState } from 'react'
import { AddCategory , GifGrid } from './components'

export const GifExpertApp = () => {

    const [ categories , setCategories ] = useState([])

    const onAddCategory = ( newCategory ) => {

        //evitamos que ingresen valores duplicados
        if(categories.includes( newCategory.toLowerCase()) ) return

        setCategories( [ newCategory , ...categories ] )                

    }

  return (
    <div className="bg-slate-800 min-h-screen h-full p-8 flex flex-col justify-start ">
        <h1 className='text-center text-3xl text-white'>Gif Expert App</h1>

        <AddCategory 
            // setCategories = { setCategories } 
            onNewCategory={ onAddCategory }
        />

        {
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category }
                    category={ category }   
                />
            ) )    
        }

    </div>
  )
}
