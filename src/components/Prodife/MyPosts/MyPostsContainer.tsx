import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostActionCreator, changeNewActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {Store} from "redux";
import {rootReducerType, store} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";


type MyPostsType = {
    // store: Store
    // posts: Array<PostType>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
}

const MyPostsContainer = (props: MyPostsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                const addPost = (text: string) => {
                   store.dispatch(addPostActionCreator(text))
                }
                const onPostChange = (text: string) => {
                    let action = changeNewActionCreator(text)
                    store.dispatch(action)
                    // props.dispatch(changeNewActionCreator(e.currentTarget.value))
                }

                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;