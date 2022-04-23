import SearchBar from '../components/UI/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import { setGif } from '../redux/Gif/gifActions'
import getNextGifs from '../services/getNextGifs'
import getPreviousGifs from '../services/getPreviousGifs'
import { Link } from 'react-router-dom'

const Gif = () => {

  const gifs = useSelector((state: any) => state.gifs.gifs)
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(25)
  const dispatch = useDispatch()

  useEffect(() => {
    getTrendingGifs()

  }, [])

  const getTrendingGifs = async () => {
    try {
      setLoading(true)

      const res: any = await getGifs()

      dispatch(setGif(res))

      setLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

  const getNextTrendingGifs = async (numero: any) => {
    try {
      setLoading(true)

      const res: any = await getNextGifs(count)

      dispatch(setGif(res))

      setLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

  const getPreviousTrendingGifs = async (numero: any) => {
    try {
      setLoading(true)

      const res: any = await getPreviousGifs(count)

      dispatch(setGif(res))

      setLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return (
      <div>
        <h1 className='h1 text-center mt-3'>Grid de gifs</h1>
        <SearchBar />
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-light" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='h-auto'>
      <h1 className='h1 text-center mt-3'>Grid de gifs</h1>
      <SearchBar />
      
      <div className='buttons d-flex justify-content-between m-3'>
          <button 
            type="button" 
            className="btn btn-outline-light"
            onClick={() => getPreviousTrendingGifs(setCount(count - 25))}  
          >Anterior</button>
          <button 
            type="button" 
            className="btn btn-outline-light"
            onClick={() => getNextTrendingGifs(setCount(count + 25))}  
          >Siguiente</button>
      </div>
      <br />
      <div className='gifs'>
        {(
          gifs?.map((item: any) => (
            <Link to={`/gif/${item.id}`} key={item.id}>
              <img
                key={item.id}
                className='gif'
                src={item.images.fixed_height.url}
                alt=''
              />
            </Link>
            
          )))
        }
      </div>
    </div>
  )
}

export default Gif