import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
})

export type rootReducerType = ReturnType<typeof reducers>
export const store = createStore(reducers)

export type AppStateType = typeof store;
// export default store
// ... - spred
// deep copy vs shallow copy