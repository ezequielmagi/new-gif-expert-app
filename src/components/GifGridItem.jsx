

export const GifGridItem = ( { id, title, url } ) => {
  return (
    <>
        <div key={ id } className="card w-60 bg-slate-400 rounded-t-none rounded-b-md p-1 mb-2">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    </>
  )
}
