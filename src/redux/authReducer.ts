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
    id: number,
    email: string,
    login: string,
}
type AuthType = ReturnType<typeof setAuthUserData>


const authReducer = (state: InitialStateType = initialState, action: AuthType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                data: action.data,
                isAuth: true,

            }
        default:
            return state
    }
}


export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: 'SET-USER-DATA',
    data: {id, email, login}
}) as const
export default authReducer;

