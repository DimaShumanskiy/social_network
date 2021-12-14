import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friends";
import {SideBarType} from "../../redux/store";


type NavbarPopsType = {
    sideBar: SideBarType
}

function Navbar(props: NavbarPopsType) {

    let friends = props.sideBar.friends.map((p,i) => <Friend key={i} nameFriend={p.name}/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
             <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>

            <div>
                <h3>Friends</h3>
                <article className={s.friendsItem}>
                    {friends}
                </article>
            </div>

        </nav>
    )
}


export default Navbar;