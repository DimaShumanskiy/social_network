import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/img_avatar.png";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pagesNumber: number) => void
    currentPage: number,
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}


const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        // отображение кол-ва страниц через css
        <div className={s.container}>
            <div className={s.pagesNumber}>
                {pages.map((pages, i) => {
                    return <span key={i}
                                 className={props.currentPage === pages ? s.selectedPageActiv : s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(pages)
                                 }}
                    >{pages}</span>
                })}


            </div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <div className={s.itemUser}>
                            <div className={s.left}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                                         className={s.avatar}/>
                                </NavLink>
                                <div>
                                    {user.followed

                                        ? <button
                                            onClick={() => {
                                                usersAPI.unFollowUser(user.id)
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.unFollow(user.id)
                                                        }
                                                    })
                                            }}
                                            className={s.btn}>Unfollow</button>

                                        : <button
                                            onClick={() => {
                                                usersAPI.followUser(user.id)
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.follow(user.id)

                                                        }
                                                    })
                                            }}
                                            className={s.btn}
                                        >Follow</button>
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
export default Users;