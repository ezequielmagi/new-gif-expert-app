import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ( { category } ) => {

    const { images , isLoading } = useFetchGifs( category )



  return (
    <div className='flex flex-col justify-evenly text-center'>
        <h3 className='text-2xl text-yellow-100 mb-4'>{ category }</h3>
        <div className="card-grid flex flex-wrap justify-evenly">
            {
                images.map( ({ id , title, url }) => (
                    <GifGridItem key={id} id={id} title={title} url={url} />
                ))
            }
        </div>
    </div>
  )
}
