import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";


let initialState: InitialStateType = {
    initialized: false
}

type InitialStateType = {
    initialized: boolean
}
type ActionsAddType = ReturnType<typeof initializedSuccess>


const appReducer = (state: InitialStateType = initialState, action: ActionsAddType): InitialStateType => {
    switch (action.type) {
        case "SET- INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}


export const initializedSuccess = () => ({
    type: 'SET- INITIALIZED',
}) as const
//
// //thunk
export const initialize = () =>
    (dispatch: Dispatch<any>) => {
        dispatch(getAuthUserData())

        dispatch(initializedSuccess())
    }


export default appReducer;

