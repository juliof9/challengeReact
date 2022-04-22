
export const UPDATE_GIF = 'UPDATE_GIF'
export const SET_GIF = 'SET_GIF'

export const updateGif = (payload: any) => ({
    type: UPDATE_GIF,
    payload
})

export const setGif = (payload: any) => ({
    type: SET_GIF,
    payload
})