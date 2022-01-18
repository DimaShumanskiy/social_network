import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";  // санковый Middleware - это не thunk - это промежуточный уровень
//который внедряем в наш стор
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer,
    form: formReducer,
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // для расширения хрома

export const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export type rootReducerType = ReturnType<typeof reducers>
// export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.__store__ = store

export type AppStateType = typeof store;
