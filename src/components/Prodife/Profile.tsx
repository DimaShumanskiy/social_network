import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType ={
    profilePage: ProfilePageType
}

function Profile(props: ProfilePropsType) {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}/>
        </section>
    )
}

export default Profile;