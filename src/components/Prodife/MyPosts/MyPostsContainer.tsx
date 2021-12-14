import React from 'react';
import {addPostActionCreator, PostType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {rootReducerType, store} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    posts: PostType[]
    newPostText?: string
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
type mapDispatchToProps = {
    addPost: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        },
        // updateNewPostText: (text: string) => {
        //     dispatch(changeNewActionCreator(text))
        // }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;