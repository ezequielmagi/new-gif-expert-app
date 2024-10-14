

export const GifExpertApp = () => {

    const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

  return (
    <div className="bg-slate-400 h-screen p-8">
        <h1>Gif Expert App</h1>

        <input
            type="text"
            placeholder="Search your gif here..." 
        />

        {
            categories.map(category => {
                return <li key={category}>{category}</li>
            })    
        }

    </div>
  )
}
