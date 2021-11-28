import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";

type ProfileContainerPropsType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType  | null
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <section>

                <Profile
                    profile={this.props.profile}/>
            </section>
        )
    }
}


type MapStatePropsType = {
    profile: ProfileType | null
}
const mapStateToProps = (state: rootReducerType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);