import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, changeNewActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {rootReducerType} from "../../../redux/redux-store";


type MyPostsType = {
    store: Store
    // posts: Array<PostType>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsType) => {
    let state = props.store.getState()
    const addPost = (text: string) => {
        props.store.dispatch(addPostActionCreator(text))
    }
    const onPostChange = (text: string) => {
        let action = changeNewActionCreator(text)
        props.store.dispatch(action)
        // props.dispatch(changeNewActionCreator(e.currentTarget.value))
    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;