import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";


type MapStatePropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

type MapDispatchPropsType ={
    follow: (userId: number)=> void
    unFollow: (userId: number)=> void
    setUsers: (users: UserType[])=> void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount:number) => void

}

const mapStateToProps = (state: rootReducerType): MapStatePropsType=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return{
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount:number) => {
            dispatch(setUsersTotalCountAC(totalUsersCount))
        }

    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer