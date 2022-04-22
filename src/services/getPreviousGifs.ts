import { API_KEY } from "../enviroment"
import instanceGif from "../instance/instanceGif"

const getPreviousGifs = async(numero: any) => {
  try {
      const res = await instanceGif.get(`/search?api_key=${API_KEY}&q=trending&limit=25&offset=${numero}&rating=g&lang=en`)
      return res.data.data
  } catch (error) {
      console.log(error)
  }
}

export default getPreviousGifs