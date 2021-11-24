import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css';
import axios from 'axios'
import userPhoto from './../../assets/images/img_avatar.png'


type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount:number) => void
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

class Users extends React.Component<UsersPropsType> {

    // constructor(props: UsersPropsType) {
    //     super(props);

    componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pagesNumber: number) => {
        this.props.setCurrentPage(pagesNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pagesNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.container}>
                <div className={s.pagesNumber}>
                    {pages.map(pages => {
                        return <span
                            className={this.props.currentPage === pages ? s.selectedPageActiv : s.selectedPage}
                            onClick={(e) => {this.onPageChanged(pages)}}
                        >{pages}</span>})}


                </div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {
                    this.props.users.map(user => <div key={user.id}>
                        <div className={s.itemUser}>
                            <div className={s.left}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                                     className={s.avatar}/>
                                <div>
                                    {user.follow
                                        ? <button
                                            onClick={() => {
                                                this.props.unFollow(user.id)
                                            }}
                                            className={s.btn}>Unfollow</button>
                                        : <button
                                            onClick={() => {
                                                this.props.follow(user.id)
                                            }}
                                            className={s.btn}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.content}>
                                <div className={s.infoUser}>
                                    <h3>{user.name}</h3>
                                    <h5>{user.status}</h5>
                                </div>
                                <div className={s.locationUser}>
                                    <h3>{'user.location.country'}</h3>
                                    <h5>{'user.location.city'}</h5>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;