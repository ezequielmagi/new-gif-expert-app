import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [ categories , setCategories ] = useState(['One Punch', 'Samurai X', 'Hunter X Hunter'])

    const onAddCategory = (e) => {
        e.preventDefault()


        
    }

  return (
    <div className="bg-slate-400 h-screen p-8">
        <h1>Gif Expert App</h1>

        <AddCategory setCategories = { setCategories } />

        {
            categories.map(category => {
                return <li key={category}>{category}</li>
            })    
        }

    </div>
  )
}
