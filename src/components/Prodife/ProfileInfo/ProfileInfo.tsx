import React from 'react';
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profileReducer";
import Preloader from "../../common/Preloader/Preloader";

type ProfileInfoType = {
    profile: ProfileType | null
}

function ProfileInfo(props: ProfileInfoType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div className={s.userContent}>
                <div className={s.descriptionBlock}>
                    <img className={s.avatar}
                         src={props.profile?.photos.large} alt=""/>
                    <span>{props.profile.aboutMe}</span>
                </div>
                {/*<ul className={s.contact}>*/}
                {/*    <li><a href={props.profile.contacts.facebook}>facebook</a></li>*/}
                {/*    <li><a href={props.profile.contacts.vk}>vk</a></li>*/}
                {/*    <li><a href={props.profile.contacts.instagram}>instagram</a></li>*/}
                {/*</ul>*/}
            </div>
        </div>
    )
}

export default ProfileInfo;

//https://html5css.ru/howto/img_avatar2.png