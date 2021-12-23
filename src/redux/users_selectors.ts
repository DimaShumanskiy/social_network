import {rootReducerType} from './redux-store';
import {UserType} from "./usersReducer";



export const getUsersData = (state: rootReducerType): Array<UserType> => {
    return state.usersPage.users
}
export const getPageSize = (state: rootReducerType): number => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: rootReducerType): number => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: rootReducerType): number => {
    return state.usersPage.currentPage
}
export const getFetching = (state: rootReducerType): boolean => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: rootReducerType): Array<number> => {
    return state.usersPage.followingInProgress
}