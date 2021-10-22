import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, updateNewPostText} from "../../redux/state";


type ProfilePropsType ={
    profilePage: ProfilePageType
    addPost:(postMessage: string)=> void
    updateNewPostText:(newText: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </section>
    )
}

export default Profile;