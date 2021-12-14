import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsType = {
    posts: Array<PostType>
    addPost:(text: string) => void
}

type FormDataType = {
    newPostMessage:string
}

const addNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'newPostMessage'}
                component={'input'}
                type="text"
            />
            <button>Add post</button>
            <button>Remove</button>
        </form>
    );
};
const AddPostMessageReduxForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(addNewPostForm)

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map((p,i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>)

    const onSubmit = (value:FormDataType) => {//redux-form
        console.log(value.newPostMessage)
        props.addPost(value.newPostMessage)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post </h3>
            <AddPostMessageReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;