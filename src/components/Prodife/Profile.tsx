import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";


type ProfilePropsType ={
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </section>
    )
}

export default Profile;