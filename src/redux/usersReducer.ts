let initialState: InitialStateType = {
    users: [],
}

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: UserPhotosType,
    follow: boolean,
    // photoURL: string,
    // location: UsersLocationType
}
type UserPhotosType = {
    small: string,
    large: string
}

type UsersLocationType = {
    city: string,
    country: string,
}


export type InitialStateType = {
    users: UserType[]
}

type UsersActionTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

const usersReducer = (state:InitialStateType = initialState, action: UsersActionTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            }
        case "UN-FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => ({
    type: 'FOLLOW',
    userId,
}) as const
export const unFollowAC = (userId: number) => ({
    type: 'UN-FOLLOW',
    userId,
}) as const
export const setUsersAC = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
}) as const

export default usersReducer;

