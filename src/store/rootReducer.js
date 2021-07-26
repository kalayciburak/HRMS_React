import favoriteReducer from "./reducers/favoriteReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
                                        favorite: favoriteReducer
                                    })

export default rootReducer;
