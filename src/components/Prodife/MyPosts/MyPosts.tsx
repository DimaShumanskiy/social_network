import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes,  PostType} from "../../../redux/store";
import {addPostActionCreator, changeNewActionCreator} from "../../../redux/profileReducer";


type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator(props.newPostText))
    }
    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeNewActionCreator(e.currentTarget.value))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post </h3>
            <div>
                <div>
                    <input value={props.newPostText} onChange={onPostChange}/>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;