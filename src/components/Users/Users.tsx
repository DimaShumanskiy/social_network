import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css';
// import * as axios from 'axios';
import axios from 'axios'
import userPhoto from './../../assets/images/img_avatar.png'


type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}
const Users = (props: UsersPropsType) => {

    const getUsers = () => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })

    }}


    return (

        <div className={s.container}>
            <button onClick={getUsers}>Get Users </button>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={s.itemUser}>
                        <div className={s.left}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                                 className={s.avatar}/>
                            <div>
                                {user.follow
                                    ? <button
                                        onClick={() => {
                                            props.unFollow(user.id)
                                        }}
                                        className={s.btn}>Unfollow</button>
                                    : <button
                                        onClick={() => {
                                            props.follow(user.id)
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
};

export default Users;