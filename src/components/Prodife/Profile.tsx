import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";


type ProfilePropsType ={
    posts:Array<PostType>
}

function Profile(props: ProfilePropsType) {

    return (
        <section>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </section>
    )
}

export default Profile;