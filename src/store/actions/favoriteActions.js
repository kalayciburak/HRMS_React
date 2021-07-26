export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE"

export function addToFavorite(jobAdvert) {
    return {
        type: ADD_TO_FAVORITE,
        payload: jobAdvert
    }
}

export function removeFromFavorite(jobAdvert) {
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: jobAdvert
    }
}
