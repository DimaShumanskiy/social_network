import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText:(e: string) => void
    addPost:(text: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost(props.newPostText)
    }
    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewPostText(e.currentTarget.value)
        // props.dispatch(changeNewActionCreator(e.currentTarget.value))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post </h3>
            <div>
                <div>
                    <input value={props.newPostText} onChange={onPostChange}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;