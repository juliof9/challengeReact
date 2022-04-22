import { combineReducers } from "redux";
import gifReducer from './Gif/gifReducer'

const rootReducer = combineReducers({
    gifs: gifReducer
})

export default rootReducer