import axios from "axios";
import {BASE_URL} from '../enviroment'

const instanceGif = axios.create({
    baseURL: BASE_URL
})

export default instanceGif