import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number)=> void
    unFollow: (userId: number)=> void
    setUsers: (users: UserType[])=> void
}
const Users = (props: UsersPropsType) => {
    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoURL: "https://html5css.ru/howto/img_avatar.png",
                follow: false,
                fullName: "Dmitriy I.",
                status: 'im am gut developer',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: "https://html5css.ru/howto/img_avatar.png",
                follow: true,
                fullName: "Pavel D.",
                status: 'im am bed developer',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoURL: "https://html5css.ru/howto/img_avatar.png",
                follow: false,
                fullName: "Nikita A.",
                status: 'im am very bad developer',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ])
    }


    return (
        <div className={s.container}>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={s.itemUser}>
                        <div className={s.left}>
                            <img src={user.photoURL} alt="" className={s.avatar}/>
                            <div>
                                {user.follow
                                    ?<button
                                        onClick={() =>{props.unFollow(user.id)}}
                                        className={s.btn}>Unfollow</button>
                                    :<button
                                        onClick={() =>{props.follow(user.id)}}
                                        className={s.btn}>Follow</button>
                                }
                            </div>
                        </div>
                        <div className={s.content}>
                            <div className={s.infoUser}>
                                <h2>{user.fullName}</h2>
                                <h4>{user.status}</h4>
                            </div>
                            <div className={s.locationUser}>
                                <h2>{user.location.country}</h2>
                                <h4>{user.location.city}</h4>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;