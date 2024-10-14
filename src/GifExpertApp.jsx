import { useState } from 'react'

export const GifExpertApp = () => {

    const [ Categories , SetCategories ] = useState(['One Punch', 'Samurai X', 'Hunter X Hunter'])

    const onAddCategory = (e) => {
        e.preventDefault()


        SetCategories(['Naruto' , ...Categories])
    }

  return (
    <div className="bg-slate-400 h-screen p-8">
        <h1>Gif Expert App</h1>

        <form className='p-4' onSubmit={onAddCategory}>
            <input
                type="text"
                placeholder="Search your gif here..." 
            />
            <button className='m-4 p-2 bg-orange-50'>Agregar</button>
        </form>

        {
            Categories.map(category => {
                return <li key={category}>{category}</li>
            })    
        }

    </div>
  )
}
