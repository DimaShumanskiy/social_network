import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

//type post data
type postsType = {
    id: number,
    message: string,
    likesCount: number
}

//data
let posts: Array<postsType> = [
    {id: 1, message: "Hi,how are you?", likesCount: 5},
    {id: 2, message: "It's my first post", likesCount: 11}
]

const MyPosts = () => {
    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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