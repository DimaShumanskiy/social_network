import React from "react";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {
    follow, getUsers, getPageUsers,
    unFollow,
    UserType
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


// UsersAPIComponent -> Users
type UsersAPIComponentPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    getPageUsers:(pagesNumber: number, pageSize: number) => void

    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
}

class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pagesNumber: number) => {
        this.props.getPageUsers(pagesNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    unFollow={this.props.unFollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                />}

        </>
    }
}

//connect(UsersContainer) -> UsersAPIComponent

type MapStatePropsType = {
    users: UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}


const mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


const UsersContainer = connect(mapStateToProps,
    // mapDispatchToProps
    {
        follow,// thunk
        unFollow,// thunk
        getUsers,// thunk
        getPageUsers,// thunk
    }
)(UsersAPIComponent)

export default UsersContainer

// type MapDispatchPropsType = {
//     follow: (userId: number) => void
//     unFollow: (userId: number) => void
//     setUsers: (users: UserType[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalUsersCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
// }

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setUsersTotalCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }