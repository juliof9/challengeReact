import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setGif } from '../redux/Gif/gifActions'
import getGifById from '../services/getGifById'

const GifDetail = () => {

  const gifs = useSelector((state: any) => state.gifs.gifs)  
  const {id} : any = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    gifById()
  }, [])

  const gifById = async() => {

    try {

      const res = await getGifById(id)

      dispatch(setGif(res))

    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <div>
      <h1 className='h1 text-center mt-3'>Detalle Gif</h1>
        
        <p className='text-center mt-5'>
            Id: {gifs.id} <br/> <br/>
            Nombre: {gifs.title} <br/> <br/> 
            Tipo: {gifs.type}
        </p>

        
    </div>
  )
}

export default GifDetail