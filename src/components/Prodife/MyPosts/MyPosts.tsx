import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";
import {AddPostMessageForm, FormDataType} from "../../Dialogs/AddMesssgeForm/AddMesssgeForm";


type MyPostsType = {
    posts: Array<PostType>
    addPost:(text: string) => void
}
const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p,i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>)

    const onSubmit = (value:FormDataType) => {//redux-form
        console.log(value.newPostMessage)
        props.addPost(value.newPostMessage)// новое сообщение в стейт
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post </h3>
            <AddPostMessageForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;