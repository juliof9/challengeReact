import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setGif } from '../../redux/Gif/gifActions'
import getGifByName from '../../services/getGifByName'


const SearchBar = () => {

    const [gifName, setGifName] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const getGifs = async(e: any) => {
        e.preventDefault()

        if(!gifName.trim()){
            setError('Campo vacio')
            return
        }
        
        const prueba: any = await getGifByName(gifName)
        
        dispatch(setGif(prueba))

        setError('')
        
    }

  return (
        <form className='m-2' onSubmit={getGifs}>

            {
                error && (
                    <div className="alert alert-danger">{error}</div>
                )
            }

            <div className='d-flex justify-content-center'>
                <input 
                    type="text" 
                    placeholder='Type for search something' 
                    className='form-control'
                    value={gifName}
                    onChange={e => setGifName(e.target.value)}
                />
                <button 
                    type='submit' 
                    className='btn btn-light mx-2 justify-content-center'
                    > 
                    Search
                </button>
            </div>

            
        </form>
  )
}

export default SearchBar