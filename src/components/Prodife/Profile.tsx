import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType ={
    profile: ProfileType  | null
    status: string
    updateUserStatus:(status: string) => void
}

const Profile = React.memo( (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer/>
        </>
    )
})

export default Profile;