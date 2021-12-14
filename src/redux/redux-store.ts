import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk"  // санковый Middleware - это не thunk - это промежуточный уровень
//который внедряем в наш стор
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type rootReducerType = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store

export type AppStateType = typeof store;
