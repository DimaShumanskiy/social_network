import React from 'react';
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number
}

function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img className={s.avatar}
                 src="https://html5css.ru/howto/img_avatar.png"/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;