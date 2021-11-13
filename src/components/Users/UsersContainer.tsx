import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/usersReducer";
import Users from "./Users";


type MapStatePropsType = {
    users: UserType[]
}

type MapDispatchPropsType ={
    follow: (userId: number)=> void
    unFollow: (userId: number)=> void
    setUsers: (users: UserType[])=> void

}

const mapStateToProps = (state: rootReducerType): MapStatePropsType=>{
    return{
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer