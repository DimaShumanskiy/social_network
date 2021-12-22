import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";


let initialState: InitialStateType = {
    data: null,
    resultCode: null,
    messages: null,
    isAuth: false,
}

type InitialStateType = {
    data: AuthDataType | null,
    resultCode: number | null,
    messages: Array<string> | null,
    isAuth: boolean
}

export  type AuthDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    // isAuth: boolean
}
type ActionsAuthType = ReturnType<typeof setAuthUserData>


const authReducer = (state: InitialStateType = initialState, action: ActionsAuthType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                data: action.payload,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}


export const setAuthUserData = (id: number | null , email: string| null, login: string| null,isAuth: boolean) => ({
    type: 'SET-USER-DATA',
    payload: {id, email, login},
    isAuth
}) as const

//thunk
export const getAuthUserData = () =>
    (dispatch: Dispatch<ActionsAuthType>) => {
        authApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
export const login = (email: string, password: string, rememberMe:boolean) =>
    (dispatch: Dispatch<ActionsAuthType | any >) => {
        authApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                   let message =  response.data.messages.length > 0 ?  response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('Login', {_error: message}))
                }})
    }
export const logout = () => (dispatch: Dispatch<ActionsAuthType>) => {
        authApi.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null,null,null,false))
                }
            })
    }






export default authReducer;

