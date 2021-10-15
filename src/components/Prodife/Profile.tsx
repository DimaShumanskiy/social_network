import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile() {
    return (
        <section>
            <ProfileInfo/>
            <MyPosts/>
        </section>
    )
}

export default Profile;