import React from 'react';
import {addPostActionCreator, changeNewActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {rootReducerType, store} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MyPostsType = {
}
const mapStateToProps = (state: rootReducerType) => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        },
        updateNewPostText: (text: string) => {
            let action = changeNewActionCreator(text)
            dispatch(action)
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
export default MyPostsContainer;