//Creacion de action y reducer
import { UPDATE_GIF, SET_GIF } from "./gifActions";

const initialState = {
    gifs: []
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_GIF:
            return updateGif(state, action)
        case SET_GIF:
            return setGif(action)
        default:
            return state
    }
}
//Deserializacion del objeto
const updateGif = (state: any, {payload}: any) => ({...state, ...payload})

const setGif = ({payload}: any) => ({gifs: payload})

export default reducer