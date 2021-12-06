import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";



type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = {
    profile: ProfileType  | null
    getUserProfile: (userId: string) => void
    isAuth: boolean
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
        if(!this.props.isAuth) return <Redirect to={'/login'}/> //this.props.isAuth === false
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
    isAuth: boolean
}
const mapStateToProps = (state: rootReducerType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

//  WithUrlDataContainerComponent -> connect -> ProfileContainer -> Profile -> ProfileInfo
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);