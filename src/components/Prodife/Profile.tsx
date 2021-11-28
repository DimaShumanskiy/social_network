import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType ={
    profile: ProfileType  | null
}

function Profile(props: ProfilePropsType) {
    return (
        <>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </>
    )
}

export default Profile;