import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setGif } from '../redux/Gif/gifActions'
import getGifById from '../services/getGifById'

const GifDetail = () => {

  const gifs = useSelector((state: any) => state.gifs.gifs)  
  const {id} : any = useParams()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    gifById()
  }, [])

  const gifById = async() => {

    try {

      setLoading(true)

      const res: any = await getGifById(id)
      console.log("Este es respuesta de peticion: ", res)

      dispatch(setGif(res))

      setLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return (
      <div>
        <h1 className='h1 text-center mt-3'>Detalle de gif</h1>
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-light" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <h1 className='h1 text-center mt-3'>Detalle Gif</h1>
        <div className='d-flex justify-content-around mt-5'>
            <img
                key={gifs.id}
                className='gif'
                src={gifs?.images?.fixed_height?.url}
                alt=''
            />
            <p className='text-center mt-5 text-white'>
                URL: {gifs.url} <br/> <br/>
                Nombre: {gifs.title} <br/> <br/> 
                Tipo: {gifs.type}
            </p>
        </div>
        
    </div>
  )
}

export default GifDetail