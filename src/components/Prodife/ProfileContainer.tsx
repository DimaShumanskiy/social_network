import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";



type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = {
    profile: ProfileType  | null
    getUserProfile: (userId: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2';
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <section>
                <Profile
                    {...this.props}
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

//  WithUrlDataContainerComponent -> connect -> ProfileContainer -> Profile -> ProfileInfo
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);