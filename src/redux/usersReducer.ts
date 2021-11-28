let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1,
    isFetching: true,
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


 type InitialStateType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}

type UsersActionTypes = ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

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
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state , isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId: number) => ({
    type: 'FOLLOW',
    userId,
}) as const
export const unFollow = (userId: number) => ({
    type: 'UN-FOLLOW',
    userId,
}) as const
export const setUsers = (users: Array<UserType>) => ({
    type: 'SET-USERS',
    users
}) as const
export const setCurrentPage = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE',currentPage }) as const
export const setTotalUsersCount = (totalUsersCount:number) => ({
    type: 'SET-USERS-TOTAL-COUNT', totalUsersCount }) as const

export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING' ,isFetching}) as const
export default usersReducer;

