import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Store} from "redux";


type ProfilePropsType ={
    store: Store
}

function Profile(props: ProfilePropsType) {
    return (
        <section>
            <ProfileInfo/>
            <MyPostsContainer
                store ={props.store}
            />
        </section>
    )
}

export default Profile;