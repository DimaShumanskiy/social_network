import React from 'react';
import s from "../../Prodife/MyPosts/Post/Post.module.css";

type PropsFriendType = {
    // avatarFriend: string
    nameFriend: string
}

const Friend = (props: PropsFriendType) => {
    return (
        <div>
            <img src="https://html5css.ru/howto/img_avatar.png" alt="" className={s.avatar}/>
            <div> {props.nameFriend}</div>
        </div>
    );
};

export default Friend;