import { API_KEY } from "../enviroment"
import instanceGif from "../instance/instanceGif"

const getGifById = async(id: any) => {
    try {
        const res = await instanceGif.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
        return res.data.data
    } catch (error) {
        console.log(error)
    }
  
}

export default getGifById