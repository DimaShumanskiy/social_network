import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {rootReducerType} from "../../redux/redux-store";
import {SideBarType} from "../../redux/store";

type MapStatePropsType = {
    sideBar: SideBarType
}
const mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        sideBar: state.sideBar
    }
}

const NavbarContainer = connect (mapStateToProps)(Navbar)

export default NavbarContainer;