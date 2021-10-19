import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsType =  {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {
    let postsElements =
        props.posts.map(p => <Post  message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My post </h3>
            <div>
                <div>
                    <input/>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;